'use client'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Button, Link } from '@nextui-org/react'

const HomeBanner = () => {
	return (
		<div className="w-full h-[600px] relative z-1 overflow-hidden rounded-b-2xl shadow-md">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<div className="relative h-full ">
					<Image
						className="object-cover object-bottom"
						src="/HomeBanner.jpg"
						alt="Programming Banner"
						fill
					/>
					<div className="absolute bg-gradient-to-t from-black/60 to--transparent h-full w-full" />
				</div>
			</div>
			<div className="relative p-4 h-full flex flex-col justify-center gap-4">
				<h1 className="font-bold text-4xl text-primary">Welcome To My Blog!</h1>
				<p className="text-white">
					Exploring the Digital Frontier: Unleashing Web Wonders and Creations -
					Join Me on a Journey through the World of Web Development and
					Cutting-Edge Technologies
				</p>
				<Button
					as={Link}
					href="#"
					color="primary"
					radius="full"
					variant="shadow"
					size="md"
					className="mr-auto "
					endContent={<FontAwesomeIcon icon={faArrowRight} />}
				>
					Check out my posts
				</Button>
			</div>
		</div>
	)
}

export default HomeBanner
