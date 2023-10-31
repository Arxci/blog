import { User } from 'next-auth'
import { NextResponse } from 'next/server'

import { isValidUser } from '@/lib/auth'
import prismaDB from '@/lib/prisma'

export const PATCH = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) {
			return validUser
		}

		const user: User = await validUser.json()

		const updatedUser = await prismaDB.user.delete({
			where: {
				id: user.id,
			},
		})

		return NextResponse.json(updatedUser)
	} catch (error) {
		console.log('SETTINGS_DELETE_PATCH ', +error)
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}
