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

const MainSiteNav = () => {
	const [ieMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={ieMenuOpen}
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
			<MainNavActions />
			<MainNavMobile onMenuClose={() => setIsMenuOpen(false)} />
		</Navbar>
	)
}

export default MainSiteNav
