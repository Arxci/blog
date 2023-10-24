import FeaturedPost from '@/components/ui/featured-post'
import { getPostWhere } from '@/lib/posts'

const FeaturedPosts = () => {
	const posts = getPostWhere({ where: { isFeatured: true } })

	return (
		<div className="my-6">
			<h1 className="text-4xl font-bold mb-6">Featured Posts</h1>
			<div className="flex flex-col gap-6 ">
				{posts &&
					posts.map((post) => (
						<FeaturedPost
							key={post.meta.id}
							author={post.meta.author}
							title={post.meta.title}
							tags={post.meta.tags}
							description={post.meta.description}
							date={post.meta.date}
							slug={post.slug}
							image={post.meta.banner}
							isFeatured={post.meta.isFeatured}
						/>
					))}
			</div>
		</div>
	)
}

export default FeaturedPosts
