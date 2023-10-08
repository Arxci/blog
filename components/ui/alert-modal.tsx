'use client'

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
	onOpenChange: () => void
}

const AlertModal: React.FC<AlertModalProps> = ({
	title,
	subtext,
	onConfirm,
	isOpen,
	onOpenChange,
}) => {
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			backdrop="blur"
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
								color="danger"
								variant="light"
								onPress={onClose}
							>
								Cancel
							</Button>
							<Button
								color="primary"
								onPress={onConfirm}
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
