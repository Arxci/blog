import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prismaDB from '@/lib/prisma'

export const POST = async (req: Request) => {
	const body = await req.json()

	const { name, password, email } = body

	if (!name || !password || !email) {
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
			name,
			password: hashedPassword,
			email,
		},
	})

	return NextResponse.json(user)
}
