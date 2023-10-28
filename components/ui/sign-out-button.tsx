'use client'

import { useState } from 'react'

import { signOut } from 'next-auth/react'

import { Button, useDisclosure } from '@nextui-org/react'

import AlertModal from './alert-modal'
import { toast } from 'sonner'

const SignOutButton = () => {
	const [loading, setLoading] = useState(false)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const signOutHandle = async () => {
		setLoading(true)
		try {
			await signOut()
		} catch (error) {
			toast.error('Sorry, failed to sign out.', {
				description: 'Please try again later.',
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<AlertModal
				loading={loading}
				title="Sign out of your account"
				subtext="Are you sure you want to sign out?"
				onConfirm={signOutHandle}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
			<Button
				color="primary"
				radius="full"
				variant="shadow"
				onClick={onOpen}
			>
				Sign Out
			</Button>
		</>
	)
}

export default SignOutButton
