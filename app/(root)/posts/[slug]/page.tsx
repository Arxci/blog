import Image from 'next/image'

import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { getPost } from '@/lib/posts'
import PostHeading from './components/PostHeading'

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
		<section className=" w-full pb-6">
			<div className="container h-full flex flex-col gap-4">
				<div className="relative w-full h-[300px] sm:h-[350px] bg-red-500">
					<Image
						fill
						className="object-cover"
						src={props.fontMatter.banner}
						alt={props.fontMatter.title}
					/>
				</div>
				<div className="px-4 md:px-6 w-full ">
					<PostHeading
						title={props.fontMatter.title}
						author={props.fontMatter.author}
						description={props.fontMatter.description}
						tag={props.fontMatter.tag}
						date={props.fontMatter.date}
					/>
					<article className=" prose prose-neutral lg:prose-xl dark:prose-invert dark:prose-code:invert dark:prose-pre:invert dark:prose-pre:bg-foreground/80 dark:prose-code:text-white ">
						<MDXRemote
							source={props.content}
							components={{}}
						></MDXRemote>
					</article>
				</div>
			</div>
		</section>
	)
}

export default Post
