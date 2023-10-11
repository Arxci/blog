'use client'

import { Chip } from '@nextui-org/react'

const TagsShowcase = ({ tags }: { tags: string }) => {
	const splitTags = tags.split(',')

	return (
		<div className="flex gap-2">
			{splitTags.map((tag) => (
				<Chip
					key={tag}
					className="bg-foreground/10"
					size="sm"
				>
					{tag}
				</Chip>
			))}
		</div>
	)
}

export default TagsShowcase
