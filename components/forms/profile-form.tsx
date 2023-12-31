'use client'

import { useEffect, useMemo, useState } from 'react'

import { User } from 'next-auth'
import { useSession } from 'next-auth/react'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Button, Input } from '@nextui-org/react'
import { toast } from 'sonner'

const formSchema = z.object({
	username: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' }),
})

type ProfileFormValues = z.infer<typeof formSchema>

const ProfileForm = () => {
	const [loading, setLoading] = useState(false)
	const { update, data: session } = useSession()

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: useMemo(() => {
			return {
				username: session?.user?.username || '',
			}
		}, [session]),
	})

	const submitFormHandle = async (data: ProfileFormValues) => {
		setLoading(true)
		try {
			const res = await axios.patch('/api/settings/update', data)

			const updatedUser: User = res.data

			update({
				username: updatedUser.username,
				id: session.user.id,
				email: session.user.email,
				role: session.user.role,
			})

			toast.success('Account successfully updated.')
		} catch (error) {
			toast.error('Failed to update account.', {
				description: error.response.data,
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		form.reset({ username: session?.user?.username || '' })
	}, [session])

	return (
		<form
			className="space-y-8 h-full"
			onSubmit={form.handleSubmit((data) => submitFormHandle(data))}
		>
			<Input
				{...form.register('username')}
				labelPlacement="outside"
				isDisabled={loading || !session}
				radius="sm"
				type="text"
				label="Username"
				placeholder="John Doe"
				description="This is your public display name. It can be your real name or a pseudonym."
				isInvalid={form.formState.errors.username !== undefined}
				errorMessage={
					form.formState.errors.username
						? form.formState.errors.username.message
						: undefined
				}
			/>
			<Button
				color="primary"
				isDisabled={!session}
				isLoading={loading}
				type="submit"
			>
				Update Profile
			</Button>
		</form>
	)
}

export default ProfileForm
