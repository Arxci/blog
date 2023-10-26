'use client'

import { useState } from 'react'

import { Session } from 'next-auth'

import { Comment } from '@prisma/client'

import PostComment from '@/app/(root)/[slug]/components/post-comment'
import CommentForm from '@/components/forms/comment-form'

interface PostCommentSectionProps {
	postId: number
	comments: Comment[]
	session: Session
}

const PostCommentSection: React.FC<PostCommentSectionProps> = ({
	postId,
	comments: initialComments,
	session,
}) => {
	const [comments, setComments] = useState<Comment[]>(initialComments)

	if (!session) return null

	const addCommentHandle = (comment: Comment) => {
		setComments((prevComments) => [...prevComments, comment])
	}

	const deleteCommentHandle = (id: string) => {}

	return (
		<div className="mt-10 space-y-6">
			<h3 className="font-bold text-lg">{comments.length} Comments</h3>

			<CommentForm
				postId={postId}
				username={session.user.username}
				userId={session.user.id}
				session={session}
				onCommentAdded={addCommentHandle}
			/>
			{comments.map((comment) => (
				<PostComment
					key={comment.id}
					session={session}
					{...comment}
					onCommentDeleted={deleteCommentHandle}
				/>
			))}
		</div>
	)
}

export default PostCommentSection
