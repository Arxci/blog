'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Button, Input } from '@nextui-org/react'
import { toast } from 'sonner'

import PasswordInput from '../ui/password-input'
import { UserSchema } from '@/schemas/zod'

type SignUpFormValues = z.infer<typeof UserSchema>

const SignUpForm = () => {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const defaultValues = {
		email: '',
		fistName: '',
		lastName: '',
		password: '',
	}

	const form = useForm<SignUpFormValues>({
		resolver: zodResolver(UserSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: SignUpFormValues) => {
		setLoading(true)
		try {
			await axios.post('/api/register', data)

			router.push('/auth/sign-in')
			toast.success('Account created', {
				description: 'Please sign in',
			})
		} catch (error) {
			toast.error('Failed to create account', {
				description: 'Please try again',
			})
		} finally {
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
			<Input
				{...form.register('firstName')}
				isRequired
				isDisabled={loading}
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
				isDisabled={loading}
				type="text"
				label="Last Name"
				placeholder="Enter your last name."
				errorMessage={
					form.formState.errors.lastName
						? form.formState.errors.lastName.message
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
				Sign Up
			</Button>
		</form>
	)
}

export default SignUpForm
