'use client'

import { useState } from 'react'

import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react'

interface AlertModalProps {
	title: string
	subtext: string
	onConfirm: () => void
	isOpen: boolean
	loading: boolean
	onOpenChange: () => void
}

const AlertModal: React.FC<AlertModalProps> = ({
	title,
	subtext,
	onConfirm,
	isOpen,
	loading,
	onOpenChange,
}) => {
	const onConfirmHandle = () => {
		onConfirm()
	}

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			backdrop="opaque"
			classNames={{
				backdrop: '!z-[100000000]',
				wrapper: '!z-[600000000]',
				base: 'bg-background/100',
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
						<ModalBody>
							<p>{subtext}</p>
						</ModalBody>
						<ModalFooter>
							<Button
								color="default"
								isDisabled={loading}
								variant="light"
								onPress={onClose}
							>
								Cancel
							</Button>
							<Button
								isLoading={loading}
								isDisabled={loading}
								color="primary"
								onPress={onConfirmHandle}
							>
								Confirm
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default AlertModal
