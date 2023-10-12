import { getAllPosts, getPostWhere } from '@/lib/posts'
import FeaturedPost from '@/components/ui/featured-post'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: siteConfig.name + ' About Me',
	description: 'Get to know more about me, the author',
}

const Posts = () => {
	const posts = getAllPosts()
	getPostWhere({ where: { start: 0, stop: 1 } })

	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<h1 className="text-2xl sm:text-4xl">Check out my posts!</h1>
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
