'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardBody } from '@nextui-org/react'
const FeaturedPost = () => {
	return (
		<Link href="/">
			<Card
				isBlurred
				className="border-none bg-background/60 dark:bg-default-100/50"
				shadow="sm"
			>
				<CardBody>
					<div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-6 md:col-span-4 overflow-hidden w-full h-full rounded-xl">
							<Image
								alt="Album cover"
								className="object-cover "
								fill
								src="/HomeBanner.jpg"
							/>
						</div>

						<div className="flex flex-col col-span-6 md:col-span-8">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-0">
									<h3 className="font-semibold text-foreground/90">Author</h3>
									<p className="text-small text-foreground/80">Tag</p>
									<h1 className="text-large font-medium mt-2">Title</h1>
								</div>
							</div>

							<div className="flex w-full items-center justify-center">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
								consequatur!
							</div>
						</div>
					</div>
				</CardBody>
			</Card>
		</Link>
	)
}

export default FeaturedPost
