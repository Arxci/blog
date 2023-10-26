import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

import { CommentSchema } from '@/schemas/zod'
import prismaDB from '@/lib/prisma'

export const POST = async (req: Request) => {
	try {
		const body = await req.json()

		const { username, userId, postId, message } = body

		if (
			username === undefined ||
			userId === undefined ||
			postId === undefined ||
			message === undefined
		) {
			return new NextResponse('Please enter author, postId, and message', {
				status: 400,
			})
		}

		try {
			await CommentSchema.parseAsync(body)
		} catch (err) {
			return new NextResponse('Please enter author, postId, and message', {
				status: 400,
			})
		}

		const comment = await prismaDB.comment.create({
			data: {
				username,
				userId,
				postId,
				message,
			},
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
		const session = await getServerSession(authOptions)

		const body = await req.json()

		const { commentId } = body

		if (commentId === undefined) {
			return new NextResponse('Please enter commentId', {
				status: 400,
			})
		}

		const comment = await prismaDB.comment.findFirst({
			where: {
				id: commentId,
			},
		})

		if (comment.userId !== session.user.id) {
			return new NextResponse('Not authorized', {
				status: 401,
			})
		}

		await prismaDB.comment.delete({
			where: { id: commentId },
		})

		return NextResponse.json(comment)
	} catch (err) {
		console.log('COMMENT_POST')
		return new NextResponse('Internal error', {
			status: 400,
		})
	}
}
