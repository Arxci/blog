import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

export const getPostByTag = ({ tag }: { tag: string }) => {
	const posts = getAllPosts()

	const filteredPosts = posts.filter((post) => {
		return post.meta.tag === tag
	})

	return filteredPosts
}
