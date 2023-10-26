'use client'

import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	useDisclosure,
} from '@nextui-org/react'
import AlertModal from './alert-modal'

const CommentActions = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const deleteCommentHandle = () => {}

	return (
		<>
			<AlertModal
				title="Delete Comment"
				subtext="Are you sure you want to delete this comment?"
				onConfirm={deleteCommentHandle}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
			<Dropdown placement="left">
				<DropdownTrigger>
					<Button
						className="ml-auto"
						isIconOnly
						radius="full"
						startContent={<FontAwesomeIcon icon={faEllipsisV} />}
					/>
				</DropdownTrigger>
				<DropdownMenu
					closeOnSelect={false}
					variant="faded"
					aria-label="Dropdown menu with icons"
				>
					<DropdownSection title="Manage ">
						<DropdownItem
							onClick={onOpen}
							key="delete"
							className="text-danger"
							color="danger"
							description="Permanently delete the comment"
							startContent={
								<FontAwesomeIcon
									className="text-xl text-default-500 pointer-events-none flex-shrink-0"
									icon={faTrashCan}
								/>
							}
						>
							Delete
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}

export default CommentActions
