'use client'

import { useState } from 'react'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import { toast } from 'sonner'

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' })
		.email('This is not a valid email.'),
})

type NewsletterFormValues = z.infer<typeof formSchema>

const NewsletterForm = () => {
	const [loading, setLoading] = useState(false)

	const defaultValues = {
		email: '',
		password: '',
	}

	const form = useForm<NewsletterFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: NewsletterFormValues) => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			toast.success('Signed up')
			form.reset()
		}, 1000)
	}

	return (
		<form
			className="flex gap-2 items-center w-full ml-auto md:justify-end"
			onSubmit={form.handleSubmit((data) => submitFormHandle(data))}
		>
			<Input
				{...form.register('email')}
				isDisabled={loading}
				size="md"
				isRequired
				type="email"
				variant="flat"
				radius="full"
				className="w-full md:w-auto"
				placeholder="Newsletter"
			/>
			<Button
				type="submit"
				isLoading={loading}
				variant="shadow"
				size="md"
				color="primary"
				radius="full"
			>
				{loading ? undefined : 'Register'}
			</Button>
		</form>
	)
}

export default NewsletterForm
