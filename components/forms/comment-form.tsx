'use client'

import { useState } from 'react'

import { Session } from 'next-auth'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar, Button, Input } from '@nextui-org/react'
import axios from 'axios'
import { toast } from 'sonner'
import { Comment } from '@prisma/client'

const formSchema = z.object({
	message: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters.' })
		.max(50, { message: 'Please enter no more than 50 characters.' }),
})

type CommentFormValues = z.infer<typeof formSchema>

interface CommentFormProps {
	postId: number
	username: string
	userId: string
	session: Session
	onCommentAdded: (comment: Comment) => void
}

const CommentForm: React.FC<CommentFormProps> = ({
	postId,
	username,
	userId,
	session,
	onCommentAdded,
}) => {
	const [loading, setLoading] = useState(false)

	const defaultValues = {
		message: '',
	}

	const form = useForm<CommentFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: CommentFormValues) => {
		const commentData = { message: data.message, postId, username, userId }

		setLoading(true)
		try {
			const res = await axios.post('/api/comment', commentData)

			const newComment: Comment = res.data

			toast.success('Comment posted.')
			clearFormHandle()
			onCommentAdded(newComment)
		} catch (error) {
			toast.error('Failed to post comment.')
		} finally {
			setLoading(false)
		}
	}

	const clearFormHandle = () => {
		form.reset()
	}

	return (
		<div className="flex items-center gap-4 flex-row">
			<Avatar
				name={session.user.username[0]}
				showFallback
				className="bg-primary !w-[40px] min-w-[40px] h-[40px] text-white flex items-center justify-center text-lg mb-[2em]"
			/>
			<form
				className="w-full flex flex-col gap-2 "
				onSubmit={form.handleSubmit((data) => submitFormHandle(data))}
			>
				<Input
					{...form.register('message')}
					isDisabled={loading}
					type="text"
					size="sm"
					variant="underlined"
					label="Post a comment..."
					errorMessage={
						form.formState.errors.message
							? form.formState.errors.message.message
							: undefined
					}
				/>
				<div className="ml-auto flex gap-2">
					<Button
						type="button"
						onClick={clearFormHandle}
						color="primary"
						variant="light"
						isDisabled={loading}
						radius="full"
					>
						Cancel
					</Button>
					<Button
						type="submit"
						isLoading={loading}
						color="primary"
						variant="solid"
						radius="full"
					>
						Comment
					</Button>
				</div>
			</form>
		</div>
	)
}

export default CommentForm
