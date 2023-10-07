'use client'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@nextui-org/react'

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'This field has to be filled in.' })
		.email('This is not a valid email.'),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters' }),
})

type SignInFormValues = z.infer<typeof formSchema>

const SignInForm = () => {
	const router = useRouter()

	const defaultValues = {
		email: '',
		password: '',
	}

	const form = useForm<SignInFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: SignInFormValues) => {
		const res = await signIn('credentials', { ...data, redirect: false })

		if (res?.error) {
			console.log(res?.error)
		} else if (res?.status === 200) {
			router.push('/')
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
				type="text"
				label="Email"
				placeholder="Enter your email."
				errorMessage={
					form.formState.errors.email
						? form.formState.errors.email.message
						: undefined
				}
			/>
			<Input
				{...form.register('password')}
				isRequired
				type="text"
				label="Password"
				placeholder="Enter your password."
				errorMessage={
					form.formState.errors.password
						? form.formState.errors.password.message
						: undefined
				}
			/>
			<Button
				type="submit"
				className="w-full "
				color="primary"
			>
				Sign in
			</Button>
		</form>
	)
}

export default SignInForm
