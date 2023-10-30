import FeaturedPost from '@/components/ui/featured-post'
import { getPostWhere } from '@/lib/posts'

const FeaturedPosts = () => {
	const { posts } = getPostWhere({ where: { isFeatured: true } })

	return (
		<div className="my-6">
			<h1 className="text-4xl font-bold mb-6">Trending</h1>
			<div className="flex flex-col gap-6 ">
				{posts &&
					posts.map((post) => (
						<FeaturedPost
							key={post.meta.id}
							slug={post.slug}
							{...post.meta}
						/>
					))}
			</div>
		</div>
	)
}

export default FeaturedPosts
