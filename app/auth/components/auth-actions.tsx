'use client'

import Link from 'next/link'

import { Button } from '@nextui-org/react'
import { siteConfig } from '@/config/site'

const AuthActions = ({ label, href }: { label: string; href: string }) => {
	return (
		<>
			<Button
				className="absolute left-2 top-4 lg:hidden text-md"
				as={Link}
				href="/"
				variant="light"
			>
				{siteConfig.name}
			</Button>
			<Button
				className="absolute right-2 top-4 text-md"
				as={Link}
				href={`/auth/${href}`}
				variant="light"
			>
				{label}
			</Button>
		</>
	)
}

export default AuthActions
