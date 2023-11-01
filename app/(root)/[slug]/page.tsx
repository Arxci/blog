import Image from 'next/image'
import type { Metadata } from 'next'

import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'

import { getPost } from '@/lib/posts'
import PostHeading from './components/post-heading'
import PostCommentSection from './components/post-comment-section'
import prismaDB from '@/lib/prisma'

import '@/styles/mdk-code.css'

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

const Post = async ({
	params,
}: {
	params: {
		slug: string
	}
}) => {
	const props = getPost(params)
	const comments = await prismaDB.comment.findMany({
		where: {
			postId: props.meta.id.toString(),
		},
		include: {
			user: true,
		},
	})

	const options = {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: rehypeHighlight,
		},
	}

	return (
		<section className=" w-full pb-6">
			<div className="container h-full flex flex-col gap-4">
				<div className="relative w-full aspect-video  overflow-hidden ">
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
				<div className="px-4 md:px-6 w-full">
					<PostHeading {...props.meta} />
					<article className=" prose prose-neutral lg:prose-xl dark:prose-invert ">
						<MDXRemote
							source={props.content}
							components={{}}
							//@ts-ignore
							options={options}
						></MDXRemote>
					</article>
					<PostCommentSection
						postId={props.meta.id.toString()}
						comments={comments}
					/>
				</div>
			</div>
		</section>
	)
}

export default Post
