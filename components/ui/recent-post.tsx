'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@nextui-org/react'

interface RecentPostProps {
	title: string
	date: string
	slug: string
	banner: string
}

const RecentPost: React.FC<RecentPostProps> = ({
	title,
	date,
	slug,
	banner,
}) => {
	return (
		<Link href={'/' + slug}>
			<Card
				shadow="sm"
				className=" group aspect-video relative "
			>
				<Image
					alt="Card background"
					className="z-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
					fill
					placeholder="blur"
					blurDataURL={banner}
					src={banner}
					sizes="500px, (max-width: 825px) 400px, (max-width: 769px) 1200px, (max-width: 600px) 800px, (max-width: 340px) 500px"
				/>
			</Card>
			<div className="px-2 pt-2">
				<h1 className="font-bold line-clamp-1 overflow-hidden">{title}</h1>
				<p className="text-foreground/80">{date}</p>
			</div>
		</Link>
	)
}

export default RecentPost
