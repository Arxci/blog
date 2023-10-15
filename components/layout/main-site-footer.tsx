import Link from 'next/link'

import { siteConfig } from '@/config/site'
import MainFooterActions from '../main-footer/main-footer-actions'
import MainFooterDesktop from '../main-footer/main-footer-desktop'

const MainSiteFooter = () => {
	return (
		<footer className="border-t border-divider w-full h-[150px]">
			<nav className="container h-full flex items-center w-full ">
				<header className=" flex items-center w-full justify-between gap-2">
					<div>
						<Link
							href="/"
							className="text-lg font-bold text-primary"
						>
							{siteConfig.name}
						</Link>
					</div>
					<MainFooterDesktop />
					<MainFooterActions />
				</header>
			</nav>
		</footer>
	)
}

export default MainSiteFooter
