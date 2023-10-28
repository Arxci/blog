import { NextResponse } from 'next/server'

import { CommentSchema } from '@/schemas/zod'
import prismaDB from '@/lib/prisma'
import { isValidUser } from '@/lib/auth'

export const POST = async (req: Request) => {
	try {
		const validUser = await isValidUser()

		if (validUser.status !== 200) return validUser

		const user = await validUser.json()

		const body = await req.json()

		const { postId, message } = body

		const data = { username: user.username, userId: user.id, postId, message }

		if (postId === undefined || message === undefined) {
			return new NextResponse('Please enter  postId, and message', {
				status: 400,
			})
		}

		// parse the data sent to the API with the zod schema
		try {
			await CommentSchema.parseAsync(data)
		} catch (err) {
			return new NextResponse('Please enter author, postId, and message', {
				status: 400,
			})
		}

		const comment = await prismaDB.comment.create({
			data,
		})

		return NextResponse.json(comment)
	} catch (err) {
		console.log('COMMENT_POST')
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

		const user = await validUser.json()

		const body = await req.json()

		const { commentId } = body

		if (commentId === undefined) {
			return new NextResponse('Please enter commentId', {
				status: 400,
			})
		}

		// Fetch the comment from the DB
		const comment = await prismaDB.comment.findFirst({
			where: {
				id: commentId,
			},
		})

		// Validate that the logged in user is allowed to modify the fetched comment
		if (comment.userId !== user.id && user.role !== 'admin') {
			return new NextResponse('Not authorized', {
				status: 403,
			})
		}

		await prismaDB.comment.delete({
			where: { id: commentId },
		})

		return NextResponse.json(comment)
	} catch (err) {
		console.log('COMMENT_PATCH')
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}
