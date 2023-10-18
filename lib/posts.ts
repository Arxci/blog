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

/*
id: 0
author: Garrett Humbert
title: NextJS 13 How To Set Up Next Themes
date: Oct 10, 2023
tags: NextThemes,NextJS
description:
  Step by step guide on how to set up Next Themes in NextJS's App Router
isFeatured: true
banner: /NextThemesBanner.jpg
*/

const orderPostsByDate = (posts: Post[], asc: boolean) => {
	const orderedPosts = posts.sort(function (postOne, postTwo) {
		//@ts-ignore
		return new Date(postOne.meta.date) - new Date(postTwo.meta.date)
	})
	if (asc) {
		orderedPosts.reverse()
	}
	return orderedPosts
}

export const getPost = ({ slug }: { slug: string }) => {
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

	const filteredPosts = slicedPosts.filter((post) => {
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
