'use client'

import CommentForm from '@/components/forms/comment-form'
import { Avatar } from '@nextui-org/react'
import { Session } from 'next-auth'

const PostUserComment = ({
	session,
	postId,
}: {
	session: Session
	postId: number
}) => {
	const authorInitials =
		session.user.name.split(' ')[0][0] + session.user.name.split(' ')[1][0]

	return (
		<div className="flex items-center gap-2 flex-row">
			<Avatar
				name={authorInitials}
				showFallback
				className="bg-primary w-[50px] h-[50px] text-white flex items-center justify-center text-xl mb-auto"
			/>
			<CommentForm
				postId={postId}
				author={session.user.name}
			/>
		</div>
	)
}

export default PostUserComment
