import { NextResponse } from 'next/server'

import { CommentDeleteSchema, CommentPostSchema } from '@/schemas/zod'
import prismaDB from '@/lib/prisma'
import { isValidUser } from '@/lib/auth'
import { User } from '@prisma/client'

export const POST = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) return validUser

		const user: User = await validUser.json()

		// parse the data sent to the API with the zod schema
		const body: { postId: number; message: string } = await req.json()

		try {
			await CommentPostSchema.parseAsync(body)
		} catch (err) {
			return new NextResponse('Please verify the information is correct.', {
				status: 400,
			})
		}

		const comment = await prismaDB.comment.create({
			data: {
				user: {
					connect: {
						id: user.id,
					},
				},
				...body,
			},
			include: {
				user: true,
			},
		})

		return NextResponse.json(comment)
	} catch (error) {
		console.log('COMMENT_POST ', +error)
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}

export const PATCH = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) {
			return validUser
		}

		const user: User = await validUser.json()

		// parse the data sent to the API with the zod schema
		const body: { id: string } = await req.json()

		try {
			await CommentDeleteSchema.parseAsync(body)
		} catch (err) {
			return new NextResponse('Please verify the information is correct.', {
				status: 400,
			})
		}

		// Validate that the logged in user is allowed to modify the fetched comment
		const comment = await prismaDB.comment.findFirst({
			where: {
				...body,
			},
		})

		if (comment.userId !== user.id && user.role !== 'admin') {
			return new NextResponse('User not authorized to modify this content.', {
				status: 403,
			})
		}

		await prismaDB.comment.delete({
			where: {
				...body,
			},
		})

		return NextResponse.json(comment)
	} catch (error) {
		console.log('COMMENT_PATCH ', +error)
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}
