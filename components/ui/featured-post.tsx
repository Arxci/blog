'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardBody } from '@nextui-org/react'
import TagsShowcase from './tags-showcase'
import AuthorShowcase from './author-showcase'

interface FeaturedPostProps {
	author: string
	tags: string
	date: string
	title: string
	description: string
	slug: string
	image: string
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
	author,
	tags,
	date,
	title,
	description,
	slug,
	image,
}) => {
	return (
		<Link href={'/posts/' + slug}>
			<Card
				isBlurred
				className="border-none bg-background/60  dark:bg-default-100/50"
				shadow="sm"
			>
				<CardBody>
					<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-6 md:col-span-4 overflow-hidden w-full h-[300px] md:h-full rounded-xl">
							<Image
								alt="Album cover"
								className="object-cover "
								fill
								src={image}
							/>
						</div>
						<div className="flex flex-col col-span-6 md:col-span-8 overflow-hidden">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-2 w-full">
									<div className="flex flex-col md:flex-row md:gap-6 md:items-center space-y-1 w-full ">
										<h1 className="text-large font-medium line-clamp-1">
											{title}
										</h1>
										<p className="md:ml-auto text-xs text-foreground/50 ">
											{date}
										</p>
									</div>
									<AuthorShowcase author={author} />
									<TagsShowcase tags={tags} />
								</div>
							</div>

							<div className="flex w-full mt-4 items-center justify-left">
								{description}
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</Link>
	)
}

export default FeaturedPost
