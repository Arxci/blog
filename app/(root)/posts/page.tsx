import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getAllPosts, getPostWhere } from '@/lib/posts'

const Posts = () => {
	const posts = getAllPosts()
	getPostWhere({ where: { start: 0, stop: 1 } })

	return (
		<div className="flex flex-col gap-6">
			<h1 className="text-3xl">Next JS Blog site</h1>
			<section className="py-10">
				<h2 className="text-2xl font-bold">Latest Blogs</h2>
				<div className="py-2">
					{posts.map((post) => (
						<>
							<Link
								href={'/posts/' + post.slug}
								passHref
								key={post.slug}
							>
								<div className="py-2 justify-between align-middle gap-2">
									<div>
										<h3 className="text-lg font-bold">{post.meta.title}</h3>
										<p className="text-gray-400">{post.meta.date}</p>
										<p className="text-gray-400">{post.meta.description}</p>
										<p className="text-gray-400">{post.meta.tag}</p>
									</div>
								</div>
							</Link>
						</>
					))}
				</div>
			</section>
		</div>
	)
}

export default Posts
