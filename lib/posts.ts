import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { siteConfig } from '@/config/site'

export const getPost = ({ slug }: { slug: string }) => {
	const markdownFile = fs.readFileSync(
		path.join('posts', slug + '.mdx'),
		'utf-8'
	)

	const { data: fontMatter, content } = matter(markdownFile)

	return { fontMatter, slug, content }
}

export const getAllPosts = () => {
	const blogDir = 'posts'

	const files = fs.readdirSync(path.join(blogDir))

	const posts = files.map((filename) => {
		const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

		const { data: frontMatter } = matter(fileContent)

		return {
			meta: frontMatter,
			slug: filename.replace('.mdx', ''),
		}
	})

	return posts
}

export const getPostWhere = ({
	where,
}: {
	where?: {
		start?: number | undefined
		stop?: number | undefined
		tag?: string | undefined
		isFeatured?: boolean | undefined
		mostRecent?: boolean | undefined
	}
}) => {
	const posts = getAllPosts()
	if (!where) {
		return posts
	}

	const { start, stop, tag, isFeatured, mostRecent } = where

	var orderedPosts

	if (mostRecent) {
		orderedPosts = posts.sort(function (postOne, postTwo) {
			//@ts-ignore
			return new Date(postOne.meta.date) - new Date(postTwo.meta.date)
		})
		orderedPosts.reverse()
	} else {
		orderedPosts = posts
	}

	const slicedPosts = orderedPosts.slice(start, stop)

	const filteredPosts = slicedPosts.filter((post) => {
		if (tag && !post.meta.tags.split(',').includes(tag)) {
			return false
		}
		if (isFeatured && post.meta.isFeatured !== isFeatured) {
			return false
		}

		return true
	})

	return filteredPosts
}
