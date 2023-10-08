'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NavbarMenu, NavbarMenuItem } from '@nextui-org/react'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const MainNavMobile = ({ onMenuClose }: { onMenuClose: () => void }) => {
	var pathName = usePathname()

	if (pathName === '/') {
		pathName = 'Home'
	} else {
		pathName = pathName[1].toUpperCase() + pathName.slice(2)
	}

	return (
		<NavbarMenu className="px-4">
			{siteConfig.mainNavLinks.map((link) => (
				<NavbarMenuItem key={link.id}>
					<Link
						href={link.href}
						onClick={onMenuClose}
						className={cn(
							'text-lg  text-foreground/80 hover:text-foreground/60',
							pathName === link.title
								? 'text-primary hover:text-primary/60'
								: undefined
						)}
					>
						{link.title}
					</Link>
				</NavbarMenuItem>
			))}
		</NavbarMenu>
	)
}

export default MainNavMobile
