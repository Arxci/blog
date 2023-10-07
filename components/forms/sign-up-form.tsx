'use client'

import { useRouter } from 'next/navigation'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Button, Input } from '@nextui-org/react'

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'This field has to be filled in.' })
		.email('This is not a valid email.'),
	firstName: z.string().min(1, { message: 'This field has to be filled in.' }),
	lastName: z.string().min(1, { message: 'This field has to be filled in.' }),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters' }),
})

type SignUpFormValues = z.infer<typeof formSchema>

const SignUpForm = () => {
	const router = useRouter()

	const defaultValues = {
		email: '',
		fistName: '',
		lastName: '',
		password: '',
	}

	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: SignUpFormValues) => {
		try {
			await axios.post('/api/register', data)

			router.push('/auth/sign-in')
		} catch (error) {}
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
				{...form.register('firstName')}
				isRequired
				type="text"
				label="Fist Name"
				placeholder="Enter your first name."
				errorMessage={
					form.formState.errors.firstName
						? form.formState.errors.firstName.message
						: undefined
				}
			/>
			<Input
				{...form.register('lastName')}
				isRequired
				type="text"
				label="Last Name"
				placeholder="Enter your last name."
				errorMessage={
					form.formState.errors.lastName
						? form.formState.errors.lastName.message
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
				Sign Up
			</Button>
		</form>
	)
}

export default SignUpForm
