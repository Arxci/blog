import { NextResponse } from 'next/server'

import { CommentSchema } from '@/schemas/zod'
import prismaDB from '@/lib/prisma'

export const POST = async (req: Request) => {
	try {
		const body = await req.json()

		const { author, postId, message } = body

		if (author === undefined || postId === undefined || message === undefined) {
			console.log(!message)

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
				author,
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

export const GET = async (req: Request) => {}
