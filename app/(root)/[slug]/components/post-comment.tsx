'use client'

import { Session } from 'next-auth'

import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	useDisclosure,
} from '@nextui-org/react'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Comment } from '@prisma/client'

import { format } from 'date-fns'
import AlertModal from '../../../../components/ui/alert-modal'

interface CommentProps {
	id: string
	username: string
	userId: string
	message: string
	createdAt: Date
	session: Session
	onCommentDeleted: (id: string) => void
}

const PostComment: React.FC<CommentProps> = ({
	id,
	userId,
	username,
	message,
	createdAt,
	session,
	onCommentDeleted,
}) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const isAuthor = session.user.id == userId

	const deleteCommentHandle = () => {
		onCommentDeleted(id)
	}

	return (
		<div className="flex items-center gap-4 flex-row">
			<Avatar
				name={username[0]}
				showFallback
				className="bg-primary !w-[40px] min-w-[40px] h-[40px] text-white flex items-center justify-center text-lg mb-[3em] sm:mb-[2em]"
			/>
			<div className="space-y-2 w-full">
				<div className="flex gap-2 items-center">
					<div className="flex sm:gap-2 flex-col sm:flex-row sm:items-center">
						<p className="lowercase text-primary truncate max-w-[150px]">
							@{username.replace(/\s/g, '')}
						</p>
						<p className="text-foreground/80 text-sm ">
							{format(new Date(createdAt), 'dd MMMM yyyy')}
						</p>
					</div>
					{isAuthor && (
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
					)}
				</div>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default PostComment