import { User } from 'next-auth'
import { NextResponse } from 'next/server'

import { isTextProfane, isValidUser } from '@/lib/auth'
import { UserUpdateSchema } from '@/schemas/zod'
import prismaDB from '@/lib/prisma'

export const PATCH = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) {
			return validUser
		}

		const user: User = await validUser.json()

		// parse the data sent to the API with the zod schema
		const body: { username: string } = await req.json()

		try {
			await UserUpdateSchema.parseAsync(body)
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

		const updatedUser = await prismaDB.user.update({
			data: {
				...body,
			},
			where: {
				id: user.id,
			},
		})

		return NextResponse.json(updatedUser)
	} catch (error) {
		console.log('SETTINGS_UPDATE_PATCH ', +error)
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}
