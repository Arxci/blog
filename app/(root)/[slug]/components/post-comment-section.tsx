import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import PostUserComment from './post-user-comment'
import prismaDB from '@/lib/prisma'
import PostComment from '@/app/(root)/[slug]/components/post-comment'

interface PostCommentSectionProps {
	postId: number
}

const PostCommentSection: React.FC<PostCommentSectionProps> = async ({
	postId,
}) => {
	const session = await getServerSession(authOptions)
	const comments = await prismaDB.comment.findMany({
		where: {
			postId,
		},
	})

	if (!session) return null

	return (
		<div className="mt-10 space-y-6">
			<h3 className="font-bold text-lg">{comments.length} Comments</h3>
			<PostUserComment
				session={session}
				postId={postId}
			/>
			{comments.map((comment) => (
				<PostComment
					key={comment.id}
					session={session}
					{...comment}
				/>
			))}
		</div>
	)
}

export default PostCommentSection
