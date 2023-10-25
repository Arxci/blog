'use client'

import { signOut } from 'next-auth/react'

import { Button, useDisclosure } from '@nextui-org/react'

import AlertModal from './alert-modal'

const SignOutButton = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const signOutHandle = () => {
		signOut()
	}

	return (
		<>
			<AlertModal
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
