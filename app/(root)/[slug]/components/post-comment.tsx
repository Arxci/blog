'use client'

import { useState } from 'react'

import { Session } from 'next-auth'

import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	useDisclosure,
} from '@nextui-org/react'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'sonner'
import { User } from '@prisma/client'

import { format } from 'date-fns'
import AlertModal from '../../../../components/ui/alert-modal'
import axios from 'axios'

interface CommentProps {
	id: string
	user: User
	message: string
	createdAt: Date
	session: Session
	onCommentDeleted: (id: string) => void
}

const PostComment: React.FC<CommentProps> = ({
	id,
	user,
	message,
	createdAt,
	session,
	onCommentDeleted,
}) => {
	const [loading, setLoading] = useState(false)
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
	const isAuthor = session.user.id == user.id || session.user.role === 'admin'

	const deleteCommentHandle = async () => {
		setLoading(true)
		try {
			await axios.patch('/api/comment', { id })

			toast.success('Comment deleted.')
			onCommentDeleted(id)
			onClose()
		} catch (error) {
			if (error.response.status === 403) {
				toast.error("Whoops, looks like you don't own this content.")
			} else {
				toast.error('Failed to delete comment.')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="flex gap-2 items-start w-full">
			<div className="w-[40px]  ">
				<Avatar
					name={user.username[0].toUpperCase()}
					className="bg-primary text-white flex items-center justify-center text-lg "
				/>
			</div>
			<div className="space-y-2 w-[calc(100%-(0.5rem+40px))]  overflow-auto;">
				<div className="flex gap-2 items-center justify-start w-full ">
					<div className="flex sm:gap-2 flex-col sm:flex-row sm:items-center ">
						<p className="lowercase text-primary truncate max-w-[150px]">
							@{user.username.replace(/\s/g, '')}
						</p>
						<p className="text-foreground/80 text-sm ">
							{format(new Date(createdAt), 'dd MMMM yyyy')}
						</p>
					</div>
					{isAuthor && (
						<>
							<AlertModal
								loading={loading}
								title="Delete Comment"
								subtext="Are you sure you want to delete this comment?"
								onConfirm={deleteCommentHandle}
								isOpen={isOpen}
								onOpenChange={onOpenChange}
							/>
							<Dropdown
								placement="left"
								classNames={{
									base: 'w-[10px]',
								}}
								size="sm"
							>
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
									<DropdownItem
										onClick={onOpen}
										key="delete"
										endContent={
											<FontAwesomeIcon
												className="text-xl h-4 w-4 pointer-events-none flex-shrink-0"
												icon={faTrashCan}
											/>
										}
									>
										Delete
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</>
					)}
				</div>
				<p className="break-words">{message}</p>
			</div>
		</div>
	)
}

export default PostComment
