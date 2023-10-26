'use client'

import { Session } from 'next-auth'

import { Avatar } from '@nextui-org/react'

import { format } from 'date-fns'
import CommentActions from './comment-actions'

interface CommentProps {
	author: string
	authorId: string
	message: string
	createdAt: Date
	session: Session
}

const Comment: React.FC<CommentProps> = ({
	authorId,
	author,
	message,
	createdAt,
	session,
}) => {
	const authorInitials = author.split(' ')[0][0] + author.split(' ')[1][0]
	const isAuthor = session.user.id == authorId

	return (
		<div className="flex items-center gap-4 flex-row">
			<Avatar
				name={authorInitials}
				showFallback
				className="bg-primary !w-[40px] min-w-[40px] h-[40px] text-white flex items-center justify-center text-lg mb-[3em] sm:mb-[2em]"
			/>
			<div className="space-y-2 w-full">
				<div className="flex gap-2 items-center">
					<div className="flex sm:gap-2 flex-col sm:flex-row sm:items-center">
						<p className="lowercase text-primary truncate max-w-[150px]">
							@{author.replace(/\s/g, '')}
						</p>
						<p className="text-foreground/80 text-sm ">
							{format(createdAt, 'dd MMMM yyyy')}
						</p>
					</div>
					{isAuthor && <CommentActions />}
				</div>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default Comment
