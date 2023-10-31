'use client'

import { useState } from 'react'

import { signIn } from 'next-auth/react'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'
import { toast } from 'sonner'

import PasswordInput from '../ui/password-input'
import AuthOAuth from '@/app/auth/components/auth-oauth'
import { useSearchParams } from 'next/navigation'

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' })
		.email('This is not a valid email.'),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters.' }),
})

type SignInFormValues = z.infer<typeof formSchema>

const SignInForm = () => {
	const [loading, setLoading] = useState(false)
	const searchParams = useSearchParams()

	const defaultValues = {
		email: '',
		password: '',
	}

	const form = useForm<SignInFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: SignInFormValues) => {
		const callback = searchParams.get('callbackUrl') || ''
		setLoading(true)
		const res = await signIn('credentials', { ...data, callbackUrl: callback })

		if (res?.error) {
			toast.error('Failed to sign in', {
				description: res?.error,
			})
			setLoading(false)
		}
	}

	return (
		<form
			className="space-y-6"
			onSubmit={form.handleSubmit((data) => submitFormHandle(data))}
		>
			<Input
				{...form.register('email')}
				isRequired
				isDisabled={loading}
				type="text"
				label="Email"
				placeholder="Enter your email."
				errorMessage={
					form.formState.errors.email
						? form.formState.errors.email.message
						: undefined
				}
			/>
			<PasswordInput
				form={form}
				loading={loading}
			/>
			<Button
				type="submit"
				className="w-full "
				color="primary"
				variant="shadow"
				isLoading={loading}
			>
				Sign in
			</Button>
			<AuthOAuth loading={loading} />
		</form>
	)
}

export default SignInForm
