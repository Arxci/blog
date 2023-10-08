'use client'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Link } from '@nextui-org/react'
import { siteConfig } from '@/config/site'

const HomeBanner = () => {
	return (
		<div className="w-full h-[650px] relative z-1 overflow-hidden md:rounded-b-2xl md:shadow-md">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<div className="relative h-full ">
					<Image
						className="object-cover object-bottom"
						src="/HomeBanner.jpg"
						alt="Home Banner"
						sizes="1024px, (max-width: 744px) 744px, (max-width: 500px) 500px, (max-width: 300px) 300px"
						fill
					/>
					<div className="absolute bg-gradient-to-t from-black/60 to--transparent h-full w-full" />
				</div>
			</div>
			<div className="relative p-4 h-full flex flex-col justify-center gap-4 px-6">
				<h1 className="font-bold text-4xl text-primary">Welcome To My Blog!</h1>
				<p className="text-white">{siteConfig.description}</p>
				<Button
					as={Link}
					href="#"
					color="primary"
					radius="full"
					variant="shadow"
					size="md"
					className="mr-auto "
					endContent={
						<FontAwesomeIcon
							className="w-4 h-4"
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
