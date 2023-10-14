'use client'

import Link from 'next/link'

import { Avatar, Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'

const AuthorHeading = () => {
	return (
		<header className="flex gap-4 flex-1 border-b md:border-none px-4 md:px-0">
			<div className="py-6 flex-col text-center md:text-left md:flex-row flex gap-4 w-full items-center">
				<Avatar
					name={'GH'}
					showFallback
					classNames={{
						base: 'bg-primary w-[60px] h-[60px] text-xl text-foreground ',
					}}
				/>
				<div className="flex flex-col ">
					<h1 className="text-3xl">Garrett Humbert</h1>
					<p className="text-primary">@GarrettHumbert</p>
				</div>
				<div className="md:ml-auto flex gap-2 items-center">
					<Button
						as={Link}
						href="/contact"
						variant="light"
						color="primary"
						className="uppercase"
						size="sm"
						radius="full"
						startContent={<FontAwesomeIcon icon={faEnvelope} />}
					>
						Contact Me
					</Button>
				</div>
			</div>
		</header>
	)
}

export default AuthorHeading
