'use client'

import { useSession } from 'next-auth/react'

import HomeBanner from './components/home-banner'
import FeaturedPosts from './components/featured-posts'

export default function Home() {
	const session = useSession()

	console.log(session.data?.user)

	return (
		<section className="h-screen w-full">
			<div className="container h-full flex flex-col gap-4">
				<HomeBanner />
				<div className="flex gap-4 h-full">
					<div className="flex-1 ">
						<FeaturedPosts />
					</div>
					<div className="flex-[.5] "></div>
				</div>
			</div>
		</section>
	)
}
