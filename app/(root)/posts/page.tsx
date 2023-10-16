import { Metadata } from 'next'

import { getAllPosts, getPostWhere } from '@/lib/posts'
import FeaturedPost from '@/components/ui/featured-post'
import { siteConfig } from '@/config/site'
import PostFilters from '@/app/(root)/posts/components/post-filters'

export const metadata: Metadata = {
	title: siteConfig.name + ' Posts',
	description:
		'View my posts and learn more about web development. I cover a wide array of topics.',
}

const Posts = async ({
	searchParams,
}: {
	searchParams: { tag: string; mostRecent: string; isFeatured: string }
}) => {
	const { tag, mostRecent, isFeatured } = searchParams

	const posts = getPostWhere({
		where: {
			tag,
			mostRecent: mostRecent === 'true',
			isFeatured: isFeatured === 'true',
		},
	})

	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<h1 className="text-2xl sm:text-4xl">Check out my posts!</h1>
				<PostFilters searchParams={searchParams} />
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
						/>
					))}
			</div>
		</section>
	)
}

export default Posts
