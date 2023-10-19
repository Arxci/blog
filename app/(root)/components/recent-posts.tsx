import RecentPost from '@/components/ui/recent-post'
import { getPostWhere } from '@/lib/posts'

const RecentPosts = () => {
	const posts = getPostWhere({ where: { stop: 2, mostRecent: true } })

	return (
		<div className="flex-[.4] py-6">
			<h2 className="text-xl text-foreground/80 font-bold h-[60px]">
				Recent Posts
			</h2>
			<div className="flex flex-col gap-6 ">
				{posts &&
					posts.map((post) => (
						<RecentPost
							key={post.meta.id}
							title={post.meta.title}
							description={post.meta.description}
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
