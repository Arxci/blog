import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { siteConfig } from '@/config/site'

interface Post {
	meta: {
		id: number
		author: string
		title: string
		date: string
		tags: string
		description: string
		isFeatured: boolean
		banner: string
	}
	slug: string
	content?: string
}

const orderPostsByDate = (posts: Post[], asc: boolean): Post[] => {
	const orderedPosts = posts.sort(function (postOne, postTwo) {
		//@ts-ignore
		return new Date(postOne.meta.date) - new Date(postTwo.meta.date)
	})
	if (asc) {
		orderedPosts.reverse()
	}
	return orderedPosts
}

const filterPosts = ({
	posts,
	filters,
}: {
	posts: Post[]
	filters: { tag?: string; isFeatured?: boolean; search?: string }
}): Post[] => {
	const { tag, isFeatured, search } = filters

	const filteredPosts = posts.filter((post) => {
		if (tag && !post.meta.tags.split(',').includes(tag)) {
			return false
		}
		if (isFeatured && post.meta.isFeatured !== isFeatured) {
			return false
		}
		if (
			search &&
			!(
				post.meta.title.toLowerCase().includes(search.toLowerCase()) ||
				post.meta.description.toLowerCase().includes(search.toLowerCase())
			)
		) {
			return false
		}
		return true
	})

	return filteredPosts
}

export const getPost = ({ slug }: { slug: string }): Post => {
	const markdownFile = fs.readFileSync(
		path.join('posts', slug + '.mdx'),
		'utf-8'
	)

	const { data: frontMatter, content } = matter(markdownFile)

	return <Post>{ meta: frontMatter, slug, content }
}

export const getAllPosts = (): Post[] => {
	const blogDir = 'posts'

	const files = fs.readdirSync(path.join(blogDir))

	const posts = files.map((filename) => {
		const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8')

		const { data: frontMatter } = matter(fileContent)

		return <Post>{
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
		start?: number
		stop?: number
		tag?: string
		isFeatured?: boolean
		mostRecent?: boolean
		search?: string
	}
}): Post[] => {
	const posts = getAllPosts()

	if (!where) {
		return posts
	}

	const { start, stop, tag, isFeatured, mostRecent, search } = where

	const orderedPosts = orderPostsByDate(posts, mostRecent)

	const slicedPosts = orderedPosts.slice(start, stop)

	const filteredPosts = filterPosts({
		posts: slicedPosts,
		filters: { tag, isFeatured, search },
	})

	return filteredPosts
}
