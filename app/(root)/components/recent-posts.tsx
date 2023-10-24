import RecentPost from '@/components/ui/recent-post'
import { getPostWhere } from '@/lib/posts'

const RecentPosts = () => {
	const posts = getPostWhere({ where: { stop: 3, mostRecent: true } })

	return (
		<div className="my-6">
			<h1 className="text-4xl font-bold mb-6">Recent Posts</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
				{posts.map((post) => (
					<RecentPost
						key={post.meta.id}
						title={post.meta.title}
						date={post.meta.date}
						slug={post.slug}
						image={post.meta.banner}
					/>
				))}
			</div>
		</div>
	)
}

export default RecentPosts

/** */
