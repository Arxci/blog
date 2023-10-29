import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

import prismaDB from './prisma'

export const isValidUser = async (): Promise<NextResponse> => {
	const session = await getServerSession(authOptions)

	// Validate that the session object exists
	if (!session) {
		return new NextResponse('User not authenticated.', {
			status: 401,
		})
	}

	// Fetch the logged in users data from the DB using the sessions userId
	const user = await prismaDB.user.findFirst({
		where: {
			id: session.user.id,
		},
	})

	// Validate that session user is valid
	if (!user) {
		return new NextResponse('User not authenticated.', {
			status: 401,
		})
	}

	return NextResponse.json(user)
}

export const assignRole = (email: string): string => {
	const adminEmails = ['garretthumbert9@gmail.com']

	return adminEmails.includes(email) ? 'admin' : 'user'
}
