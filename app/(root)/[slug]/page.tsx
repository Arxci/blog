import Image from 'next/image'
import type { Metadata } from 'next'

import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { getPost } from '@/lib/posts'
import PostHeading from './components/post-heading'
import PostCommentSection from './components/post-comment-section'

export async function generateStaticParams() {
	const files = fs.readdirSync(path.join('posts'))

	const paths = files.map((fileName) => {
		return {
			slug: fileName.replace('.mdx', ''),
		}
	})

	return paths
}

export async function generateMetadata({
	params,
}: {
	params: {
		slug: string
	}
}): Promise<Metadata> {
	const props = getPost(params)

	return {
		title: props.meta.title,
		description: props.meta.description,
	}
}

const Post = ({
	params,
}: {
	params: {
		slug: string
	}
}) => {
	const props = getPost(params)

	return (
		<section className=" w-full pb-6">
			<div className="container h-full flex flex-col gap-4">
				<div className="relative w-full h-[300px] sm:h-[450px] overflow-hidden lg:rounded-b-xl">
					<Image
						fill
						className="object-cover"
						placeholder="blur"
						sizes="1024px, (max-width: 1023px) 100vw"
						blurDataURL={props.meta.banner}
						src={props.meta.banner}
						alt={props.meta.title}
					/>
				</div>
				<div className="px-4 md:px-6 w-full ">
					<PostHeading
						title={props.meta.title}
						author={props.meta.author}
						description={props.meta.description}
						tags={props.meta.tags}
						date={props.meta.date}
					/>
					<article className=" prose prose-neutral lg:prose-xl dark:prose-invert dark:prose-code:invert dark:prose-pre:invert dark:prose-pre:bg-foreground/80 dark:prose-code:text-white ">
						<MDXRemote
							source={props.content}
							components={{}}
						></MDXRemote>
					</article>
					<PostCommentSection postId={props.meta.id} />
				</div>
			</div>
		</section>
	)
}

export default Post
