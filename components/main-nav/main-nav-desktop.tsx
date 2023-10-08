import { usePathname } from 'next/navigation'

import Link from 'next/link'

import { NavbarContent, NavbarItem } from '@nextui-org/react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const MainNavDesktop = () => {
	var pathName = usePathname()

	if (pathName === '/') {
		pathName = 'Home'
	} else {
		pathName = pathName[1].toUpperCase() + pathName.slice(2)
	}

	return (
		<NavbarContent
			className="hidden sm:flex gap-4"
			justify="center"
		>
			{siteConfig.mainNavLinks.map((link) => (
				<NavbarItem
					key={link.id}
					isActive={pathName === link.title}
				>
					<Link
						href={link.href}
						className={cn(
							'text-md  text-foreground/80 hover:text-foreground/60',
							pathName === link.title
								? 'text-primary font-bold hover:text-secondary'
								: undefined
						)}
					>
						{link.title}
					</Link>
				</NavbarItem>
			))}
		</NavbarContent>
	)
}

export default MainNavDesktop
