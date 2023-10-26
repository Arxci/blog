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
	console.log(session)

	return (
		<div className="flex items-center gap-4 flex-row">
			<Avatar
				name={session.user.username[0]}
				showFallback
				className="bg-primary !w-[40px] min-w-[40px] h-[40px] text-white flex items-center justify-center text-lg mb-[2em]"
			/>
			<CommentForm
				postId={postId}
				username={session.user.username}
				userId={session.user.id}
			/>
		</div>
	)
}

export default PostUserComment
