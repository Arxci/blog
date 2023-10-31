'use client'

import { useState } from 'react'

import { signOut, useSession } from 'next-auth/react'

import { Button } from '@nextui-org/button'
import { useDisclosure } from '@nextui-org/react'
import axios from 'axios'
import { toast } from 'sonner'

import AlertModal from '@/components/ui/alert-modal'

export function DeleteAccount() {
	const [loading, setLoading] = useState(false)
	const { data: session } = useSession()
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const deleteAccountHandle = async () => {
		setLoading(true)
		try {
			await axios.patch('/api/settings/delete')

			signOut()
		} catch (error) {
			toast.error('Sorry, failed to delete.', {
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
				title="Delete your account"
				subtext="Are you sure you want to delete this account?"
				onConfirm={deleteAccountHandle}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
			<div className="bg-danger/20 flex justify-between items-center w-full text-danger p-6 rounded-lg">
				<div className="space-y-1">
					<h4 className="font-bold text-lg">Delete Account</h4>
					<p className="text-sm">Permanently delete your account</p>
				</div>
				<Button
					isDisabled={loading || !session}
					onClick={onOpen}
					variant="solid"
					color="danger"
				>
					Delete
				</Button>
			</div>
		</>
	)
}
