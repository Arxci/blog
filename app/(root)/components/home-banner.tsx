'use client'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Link } from '@nextui-org/react'
import { siteConfig } from '@/config/site'

const HomeBanner = () => {
	return (
		<div className="w-full h-[500px] md:h-[400px] relative z-1 overflow-hidden lg:rounded-b-2xl lg:shadow-md">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<div className="relative h-full ">
					<Image
						className="object-cover object-right-bottom md:object-bottom"
						src="/HomeBanner.jpg"
						alt="Home Banner"
						priority
						sizes="1024px, (max-width: 744px) 744px, (max-width: 500px) 500px, (max-width: 300px) 300px"
						fill
					/>
					<div className="absolute bg-gradient-to-t from-black/50 from-60% to--transparent h-full w-full" />
				</div>
			</div>
			<div className="relative h-full flex text-center flex-col items-center md:text-start md:items-start justify-center gap-4 px-4 md:px-6">
				<h1 className="font-bold text-4xl text-white">Welcome To My Blog!</h1>
				<p className="text-white/80 ">{siteConfig.description}</p>
				<Button
					as={Link}
					href="#"
					color="primary"
					radius="full"
					variant="shadow"
					size="md"
					className="md:mr-auto group"
					endContent={
						<FontAwesomeIcon
							className="w-4 h-4 transition-transform group-hover:translate-x-1 group-focus-within:translate-x-1"
							icon={faArrowRight}
						/>
					}
				>
					Check out my posts
				</Button>
			</div>
		</div>
	)
}

export default HomeBanner
