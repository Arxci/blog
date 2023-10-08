'use client'

import { useState } from 'react'

import { Session } from 'next-auth'
import Link from 'next/link'

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
} from '@nextui-org/react'

import { siteConfig } from '@/config/site'
import MainNavActions from '../main-nav/main-nav-actions'
import MainNavDesktop from '../main-nav/main-nav-desktop'
import MainNavMobile from '../main-nav/main-nav-mobile'

interface MainNavProps {
	session: Session
}

const MainSiteNav: React.FC<MainNavProps> = ({ session }) => {
	const [ieMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={ieMenuOpen}
			shouldHideOnScroll
			isBordered
			isBlurred={false}
			className="[&>*:first-child]:px-4 [&>*:first-child]:md:px-6"
		>
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
			<MainNavDesktop />
			<MainNavActions session={session} />
			<MainNavMobile onMenuClose={() => setIsMenuOpen(false)} />
		</Navbar>
	)
}

export default MainSiteNav
