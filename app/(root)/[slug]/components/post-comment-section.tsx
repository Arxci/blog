import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import PostUserComment from './post-user-comment'
import prismaDB from '@/lib/prisma'

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

	console.log(comments)

	if (!session) return null

	return (
		<div className="mt-10">
			<PostUserComment
				session={session}
				postId={postId}
			/>
		</div>
	)
}

export default PostCommentSection
