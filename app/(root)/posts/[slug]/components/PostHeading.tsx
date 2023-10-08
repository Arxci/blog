'use client'

import { Avatar, Chip } from '@nextui-org/react'

interface PropsHeadingProps {
	author: string
	description: string
	tag: string
	title: string
	date: string
}

const PostHeading: React.FC<PropsHeadingProps> = ({
	author,
	description,
	tag,
	title,
	date,
}) => {
	const authorInitials = author.split(' ')[0][0] + author.split(' ')[1][0]

	return (
		<div className="space-y-4 py-10">
			<h1 className="text-4xl sm:text-6xl">{title}</h1>
			<div className="flex flex-col sm:flex-row gap-2 sm:items-center">
				<div className="flex gap-2 items-center">
					<Avatar
						name={authorInitials}
						showFallback
						classNames={{
							base: 'bg-primary w-8 h-8 text-foreground flex items-center justify-center',
						}}
					/>
					<p className="text-blue-600">@{author}</p>
				</div>
				<span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/60" />
				<p className="text-sm text-foreground/80">{date}</p>
				<span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/60" />
				<Chip
					className="bg-foreground/10"
					size="sm"
				>
					{tag}
				</Chip>
			</div>
			<p className="text-lg text-foreground/80">{description}</p>
		</div>
	)
}

export default PostHeading
