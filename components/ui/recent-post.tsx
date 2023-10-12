'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardHeader } from '@nextui-org/react'

interface RecentPostProps {
	title: string
	description: string
	date: string
	slug: string
	image: string
}

const RecentPost: React.FC<RecentPostProps> = ({
	title,
	description,
	date,
	slug,
	image,
}) => {
	return (
		<Link href={'/posts/' + slug}>
			<Card
				shadow="sm"
				isBlurred
				className="col-span-12 group overflow-hidden sm:col-span-4 h-[300px] relative "
			>
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<p className="!line-clamp-2 text-sm font-bold text-white/80 ">
						{description}
					</p>
					<h4 className="text-white text-xl font-black">{title}</h4>
					<p className="text-sm text-white/80 font-bold ">{date}</p>
				</CardHeader>
				<Image
					alt="Card background"
					className="z-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
					fill
					priority
					src={image}
					sizes="500px, (max-width: 825px) 400px, (max-width: 769px) 1200px, (max-width: 600px) 800px, (max-width: 340px) 500px"
				/>
				<div className="absolute h-full w-full bg-gradient-to-b from-black/60 to--transparent" />
			</Card>
		</Link>
	)
}

export default RecentPost
