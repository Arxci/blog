import { usePathname } from 'next/navigation'

import { NavbarContent, NavbarItem, Link } from '@nextui-org/react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const MainNavDesktop = () => {
	var pathName = usePathname()

	if (pathName === '/') {
		pathName = 'Home'
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
							'text-sm  text-foreground/80 hover:text-foreground/60',
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
