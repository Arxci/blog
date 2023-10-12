import AuthorShowcase from '@/components/ui/author-showcase'
import TagsShowcase from '@/components/ui/tags-showcase'

interface PropsHeadingProps {
	author: string
	description: string
	tags: string
	title: string
	date: string
}

const PostHeading: React.FC<PropsHeadingProps> = ({
	author,
	description,
	tags,
	title,
	date,
}) => {
	return (
		<div className="space-y-4 py-10">
			<h1 className="text-4xl sm:text-6xl">{title}</h1>
			<div className="flex flex-col sm:flex-row gap-2 sm:items-center">
				<div className="flex gap-2 items-center">
					<AuthorShowcase author={author} />
					<span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/60" />
					<p className="text-sm text-foreground/80">{date}</p>
				</div>
				<span className="hidden sm:block w-1 h-1 rounded-full bg-foreground/60" />
				<div className="flex">
					<TagsShowcase tags={tags} />
				</div>
			</div>
			<p className="text-lg text-foreground/80">{description}</p>
		</div>
	)
}

export default PostHeading
