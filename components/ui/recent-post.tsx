'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Card, CardHeader } from '@nextui-org/react'

const RecentPost = () => {
	return (
		<Link href="/">
			<Card className="col-span-12 group overflow-hidden shadow-sm sm:col-span-4 h-[300px]">
				<CardHeader className="absolute z-10 top-1 flex-col !items-start">
					<p className="text-tiny text-white/60 uppercase font-bold">tag</p>
					<h4 className="text-white font-medium text-large">Title</h4>
				</CardHeader>
				<Image
					alt="Card background"
					className="z-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
					fill
					src="/HomeBanner.jpg"
				/>
			</Card>
		</Link>
	)
}

export default RecentPost
