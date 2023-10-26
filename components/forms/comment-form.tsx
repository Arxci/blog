'use client'

import { useState } from 'react'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import axios from 'axios'
import { toast } from 'sonner'

const formSchema = z.object({
	message: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters.' })
		.max(50, { message: 'Please enter no more than 50 characters.' }),
})

type CommentFormValues = z.infer<typeof formSchema>

interface CommentFormProps {
	postId: number
	author: string
	authorId: string
}

const CommentForm: React.FC<CommentFormProps> = ({
	postId,
	author,
	authorId,
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
		const commentData = { message: data.message, postId, author, authorId }

		setLoading(true)
		try {
			await axios.post('/api/comment', commentData)

			toast.success('Comment posted.')
			clearFormHandle()
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
	)
}

export default CommentForm
