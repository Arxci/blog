import Link from 'next/link'

import { siteConfig } from '@/config/site'
import MainFooterActions from '../main-footer/main-footer-actions'
import MainFooterLinks from '../main-footer/main-footer-links'

const MainSiteFooter = () => {
	return (
		<footer className="border-t py-10 border-divider flex items-center  w-full min-h-[150px]">
			<nav className="container  w-full ">
				<header className="px-4 md:px-6 flex flex-col md:flex-row md:items-center w-full justify-between gap-2">
					<div>
						<Link
							href="/"
							className="text-lg font-bold text-primary"
						>
							{siteConfig.name}
						</Link>
					</div>
					<MainFooterLinks />
					<MainFooterActions />
				</header>
			</nav>
		</footer>
	)
}

export default MainSiteFooter