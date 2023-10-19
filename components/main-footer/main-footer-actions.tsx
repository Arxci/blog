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

type RegisterFormValues = z.infer<typeof formSchema>

const MainFooterActions = () => {
	const [loading, setLoading] = useState(false)

	const defaultValues = {
		email: '',
		password: '',
	}

	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: RegisterFormValues) => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			toast.success('Signed up')
			form.reset()
		}, 1000)
	}

	return (
		<div>
			<form
				className="flex gap-2 items-center"
				onSubmit={form.handleSubmit((data) => submitFormHandle(data))}
			>
				<Input
					{...form.register('email')}
					isDisabled={loading}
					size="md"
					isRequired
					type="email"
					variant="flat"
					placeholder="Newsletter"
				/>
				<Button
					type="submit"
					isLoading={loading}
					variant="shadow"
					size="md"
					color="primary"
				>
					{loading ? undefined : 'Register'}
				</Button>
			</form>
		</div>
	)
}

export default MainFooterActions
