import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prismaDB from '@/lib/prisma'

import { UserSchema } from '@/schemas/zod'

export const POST = async (req: Request) => {
	const body = await req.json()

	const { username, lastName, password, email } = body

	if (!username || !password || !email) {
		return new NextResponse('Please enter name, password, and email', {
			status: 400,
		})
	}

	try {
		await UserSchema.parseAsync(body)
	} catch (err) {
		return new NextResponse('Please enter name, password, and email', {
			status: 400,
		})
	}

	const userAlreadyExists = await prismaDB.user.findUnique({
		where: {
			email,
		},
	})

	if (userAlreadyExists) {
		return new NextResponse('Email already in use', { status: 400 })
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	const user = await prismaDB.user.create({
		data: {
			username,
			password: hashedPassword,
			email,
		},
	})

	return NextResponse.json(user)
}
