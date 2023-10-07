'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@nextui-org/react'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const MainSiteNav = () => {
	var pathName = usePathname()

	if (pathName === '/') {
		pathName = 'Home'
	}

	return (
		<nav className="z-40 w-full h-16 border-b sticky top-0 bg-background">
			<header className="container w-full h-full flex items-center justify-between gap-6">
				<div>
					<Link
						href="#"
						className="text-lg hover:text-foreground/80"
					>
						{siteConfig.name}
					</Link>
				</div>
				<ul className="flex gap-4">
					{siteConfig.mainNavLinks.map((link) => (
						<li key={link.id}>
							<Link
								href={link.href}
								className={cn(
									'text-sm  text-foreground/80 hover:text-foreground/60',
									pathName === link.title
										? 'text-primary hover:text-primary/60'
										: undefined
								)}
							>
								<span>{link.title}</span>
							</Link>
						</li>
					))}
				</ul>
				<div>
					<Button
						as={Link}
						href="/auth/sign-in"
						radius="full"
						variant="light"
						color="primary"
					>
						Sign In
					</Button>
					<Button
						as={Link}
						href="/auth/sign-up"
						radius="full"
						variant="light"
						color="primary"
					>
						Sign Up
					</Button>
				</div>
			</header>
		</nav>
	)
}

export default MainSiteNav
