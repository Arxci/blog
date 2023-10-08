import FeaturedPost from '@/components/ui/featured-post'
import { getPostWhere } from '@/lib/posts'

const FeaturedPosts = () => {
	const posts = getPostWhere({ where: { isFeatured: true } })

	return (
		<div className="py-6 flex-1">
			<h1 className="text-4xl font-bold  h-[60px]">Featured Posts</h1>
			<div className="flex flex-col gap-6 ">
				{posts &&
					posts.map((post) => (
						<FeaturedPost
							key={post.meta.id}
							author={post.meta.author}
							title={post.meta.title}
							tag={post.meta.tag}
							description={post.meta.description}
							date={post.meta.date}
							slug={post.slug}
						/>
					))}
			</div>
		</div>
	)
}

export default FeaturedPosts
