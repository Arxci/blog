'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardBody, Chip } from '@nextui-org/react'
import TagsShowcase from './tags-showcase'
import AuthorShowcase from './author-showcase'

interface FeaturedPostProps {
	author: string
	tags: string
	date: string
	title: string
	description: string
	slug: string
	banner: string
	isFeatured: boolean
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
	author,
	tags,
	date,
	title,
	description,
	slug,
	banner,
	isFeatured,
}) => {
	return (
		<Link href={'/' + slug}>
			<Card
				className="border-none bg-background/60 dark:bg-default-100/50 [&>*:first-child]:!p-4 sm:[&>*:first-child]:!p-5"
				shadow="sm"
				classNames={{
					base: 'p-0',
				}}
			>
				<CardBody>
					<div className="md:h-[201px]  grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center ">
						<div className="relative col-span-6 md:col-span-4 overflow-hidden w-full aspect-video h-full rounded-xl">
							<Image
								alt="Album cover"
								className="object-cover "
								sizes="400px, (max-width: 825px) 300px, (max-width: 769px) 1000px, (max-width: 600px) 700px, (max-width: 340px) 400px"
								placeholder="blur"
								blurDataURL={banner}
								fill
								src={banner}
							/>
							{isFeatured && (
								<Chip
									color="primary"
									variant="flat"
									className="absolute bottom-1 left-1"
								>
									Featured
								</Chip>
							)}
						</div>
						<div className="flex flex-col col-span-6 md:col-span-8 overflow-hidden">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-2 w-full">
									<div className="flex flex-col md:flex-row md:gap-6 md:items-center space-y-1 w-full ">
										<h1 className="text-large font-medium line-clamp-1">
											{title}
										</h1>
										<p className="whitespace-nowrap md:ml-auto text-xs text-foreground/50 ">
											{date}
										</p>
									</div>
									<AuthorShowcase author={author} />
									<TagsShowcase tags={tags} />
								</div>
							</div>

							<p className="flex w-full mt-4 items-center justify-left !line-clamp-2">
								{description}
							</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Link>
	)
}

export default FeaturedPost
