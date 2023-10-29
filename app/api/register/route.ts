import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

import prismaDB from '@/lib/prisma'
import { RegisterSchema } from '@/schemas/zod'
import { assignRole, isTextProfane } from '@/lib/auth'

export const POST = async (req: Request) => {
	try {
		// parse the data sent to the API with the zod schema
		const body: { username: string; password: string; email: string } =
			await req.json()

		try {
			await RegisterSchema.parseAsync(body)
		} catch (err) {
			return new NextResponse('Please verify the information is correct.', {
				status: 400,
			})
		}

		const isProfane = isTextProfane(body.username)

		if (isProfane) {
			return new NextResponse('Please refrain from using offensive words.', {
				status: 400,
			})
		}

		// Check if the email provided is already registered to a user
		const userAlreadyExists = await prismaDB.user.findUnique({
			where: {
				email: body.email,
			},
		})

		if (userAlreadyExists) {
			return new NextResponse('Email already in use.', { status: 409 })
		}

		// Encrypt the password
		const hashedPassword = await bcrypt.hash(body.password, 10)

		// Assign a role
		const role = assignRole(body.email)

		const user = await prismaDB.user.create({
			data: {
				...body,
				password: hashedPassword,
				role,
			},
		})

		return NextResponse.json(user)
	} catch (error) {
		console.log('REGISTER_POST ', +error)
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}
