import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { getPost } from '@/lib/posts'

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join('posts'))

	const paths = files.map((fileName) => {
		return {
			slug: fileName.replace('.mdx', ''),
		}
	})

	return paths
}

const Post = ({ params }: any) => {
	const props = getPost(params)

	return (
		<article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-invert mx-auto">
			<h1>{props.fontMatter.title}</h1>
			<MDXRemote source={props.content}></MDXRemote>
		</article>
	)
}

export default Post
