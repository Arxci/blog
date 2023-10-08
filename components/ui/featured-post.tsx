'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardBody, Chip, Avatar } from '@nextui-org/react'

interface FeaturedPostProps {
	author: string
	tag: string
	date: string
	title: string
	description: string
	slug: string
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
	author,
	tag,
	date,
	title,
	description,
	slug,
}) => {
	const authorInitials = author.split(' ')[0][0] + author.split(' ')[1][0]

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
								src="/HomeBanner.jpg"
							/>
						</div>

						<div className="flex flex-col col-span-6 md:col-span-8 overflow-hidden">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-2">
									<div className="flex gap-2 items-center">
										<Avatar
											name={authorInitials}
											showFallback
											classNames={{
												base: 'bg-primary w-8 h-8 text-foreground flex items-center justify-center',
											}}
										/>
										<p className="text-blue-600 text-sm">@{author}</p>
									</div>

									<Chip
										className="bg-foreground/10"
										size="sm"
									>
										{tag}
									</Chip>
									<div className="flex flex-col md:flex-row md:gap-6 md:items-center space-y-1 mb-4">
										<h1 className="text-large font-medium line-clamp-1">
											{title}
										</h1>
										<p className="text-xs text-foreground/50 ">{date}</p>
									</div>
								</div>
							</div>

							<div className="flex w-full items-center justify-left">
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
