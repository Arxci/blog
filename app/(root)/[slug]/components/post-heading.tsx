'use client'

import AuthorShowcase from '@/components/ui/author-showcase'
import TagsShowcase from '@/components/ui/tags-showcase'
import { Divider } from '@nextui-org/react'

interface PropsHeadingProps {
	author: string
	tags: string
	title: string
	date: string
}

const PostHeading: React.FC<PropsHeadingProps> = ({
	author,
	tags,
	title,
	date,
}) => {
	return (
		<div className="space-y-4 py-2 sm:py-6">
			<h1 className="text-xl sm:text-2xl">{title}</h1>
			<div className="flex flex-col sm:flex-row gap-2 sm:items-center">
				<AuthorShowcase author={author} />
				<span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/60" />
				<p className="text-sm text-foreground/80">{`Posted on ${date}`}</p>
				<span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/60" />
				<div className="flex">
					<TagsShowcase tags={tags} />
				</div>
			</div>

			<Divider />
		</div>
	)
}

export default PostHeading
