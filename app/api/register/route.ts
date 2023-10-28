import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prismaDB from '@/lib/prisma'

import { UserSchema } from '@/schemas/zod'

export const POST = async (req: Request) => {
	const body = await req.json()

	const { username, password, email } = body

	if (!username || !password || !email) {
		return new NextResponse('Please enter name, password, and email', {
			status: 400,
		})
	}

	// parse the data sent to the API with the zod schema
	try {
		await UserSchema.parseAsync(body)
	} catch (err) {
		return new NextResponse('Please enter name, password, and email', {
			status: 400,
		})
	}

	// Fetch the user based on the email passed in
	const userAlreadyExists = await prismaDB.user.findUnique({
		where: {
			email,
		},
	})

	if (userAlreadyExists) {
		return new NextResponse('Email already in use', { status: 409 })
	}

	const hashedPassword = await bcrypt.hash(password, 10)

	// Assign an admin role for certain user
	const role = ['garretthumbert9@gmail.com'].includes(email) ? 'admin' : 'user'

	const user = await prismaDB.user.create({
		data: {
			username,
			password: hashedPassword,
			email,
			role,
		},
	})

	return NextResponse.json(user)
}
