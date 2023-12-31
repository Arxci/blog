'use client'

import { useState } from 'react'

import { Comment, User } from '@prisma/client'

import PostComment from '@/app/(root)/[slug]/components/post-comment'
import CommentForm from '@/components/forms/comment-form'
import { useSession } from 'next-auth/react'

interface PostCommentSectionProps {
	postId: string
	comments: (Comment & { user: User })[]
}

const PostCommentSection: React.FC<PostCommentSectionProps> = ({
	postId,
	comments: initialComments,
}) => {
	const [comments, setComments] =
		useState<(Comment & { user: User })[]>(initialComments)
	const { data: session } = useSession()

	if (!session) return null

	const addCommentHandle = (comment: Comment & { user: User }) => {
		setComments((prevComment) => [...prevComment, comment])
	}

	const deleteCommentHandle = (id: string) => {
		setComments((prevComments) =>
			prevComments.filter((comment) => comment.id !== id)
		)
	}

	return (
		<div className="mt-10 space-y-6">
			<h3 className="font-bold text-lg">
				{comments.length} {`Comment${comments.length === 1 ? '' : 's'}`}
			</h3>

			<CommentForm
				postId={postId}
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
