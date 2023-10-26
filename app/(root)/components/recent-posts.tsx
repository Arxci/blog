import RecentPost from '@/components/ui/recent-post'
import { getPostWhere } from '@/lib/posts'

const RecentPosts = () => {
	const posts = getPostWhere({ where: { stop: 3, mostRecent: true } })

	return (
		<div className="my-6">
			<h1 className="text-4xl font-bold mb-6">What's New</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
				{posts.map((post) => (
					<RecentPost
						key={post.meta.id}
						slug={post.slug}
						{...post.meta}
					/>
				))}
			</div>
		</div>
	)
}

export default RecentPosts
