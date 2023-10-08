import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getAllPosts, getPostWhere } from '@/lib/posts'
import FeaturedPost from '@/components/ui/featured-post'

const Posts = () => {
	const posts = getAllPosts()
	getPostWhere({ where: { start: 0, stop: 1 } })

	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<h1 className="text-4xl">Check out my posts!</h1>
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
		</section>
	)
}

export default Posts
