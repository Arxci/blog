'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'
import Link from 'next/link'

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import MainNavActions from '../main-nav/main-nav-actions'
import MainNavDesktop from '../main-nav/main-nav-desktop'

interface MainNavProps {
	session: Session
}

const MainSiteNav: React.FC<MainNavProps> = ({ session }) => {
	const [ieMenuOpen, setIsMenuOpen] = useState(false)
	var pathName = usePathname()

	if (pathName === '/') {
		pathName = 'Home'
	}

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			shouldHideOnScroll
			isBordered
			isBlurred={false}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={ieMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Link
						href="/"
						className="text-lg text-foreground hover:text-foreground/80"
					>
						{siteConfig.name}
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<MainNavDesktop />
			<MainNavActions session={session} />
			<NavbarMenu>
				{siteConfig.mainNavLinks.map((link) => (
					<NavbarMenuItem key={link.id}>
						<Link
							href={link.href}
							className={cn(
								'text-sm  text-foreground/80 hover:text-foreground/60',
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
		</Navbar>
	)
}

export default MainSiteNav
