'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/react'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		href: string
		title: string
	}[]
}

const SidebarNav = ({ className, items, ...props }: SidebarNavProps) => {
	const pathname = usePathname()

	return (
		<nav
			className={cn(
				'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
				className
			)}
			{...props}
		>
			{items.map((item) => (
				<Button
					key={item.href}
					href={item.href}
					as={Link}
					disableRipple
					radius="sm"
					variant="flat"
					className={cn(
						pathname === item.href
							? 'bg-default-100 hover:bg-default-200 '
							: 'hover:bg-transparent hover:underline',
						'lg:justify-start'
					)}
				>
					{item.title}
				</Button>
			))}
		</nav>
	)
}

export default SidebarNav
