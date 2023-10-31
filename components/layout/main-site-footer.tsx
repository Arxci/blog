import Link from 'next/link'

import { siteConfig } from '@/config/site'
import MainFooterActions from '../main-footer/main-footer-actions'
import MainFooterLinks from '../main-footer/main-footer-links'
import DarkModeButton from '../ui/dark-mode-button'

const MainSiteFooter = () => {
	return (
		<footer className="border-t py-10 border-divider flex items-center  w-full min-h-[150px]">
			<nav className="container  w-full ">
				<header className="px-4 md:px-6 flex flex-col md:flex-row flex-nowrap md:items-center w-full justify-between gap-2 md:gap-4 ">
					<div className="flex w-full items-center justify-start mb-5 sm:mb-0">
						<Link
							href="/"
							className="text-xl "
						>
							{siteConfig.name}
						</Link>
						<div className=" sm:hidden ml-auto">
							<DarkModeButton />
						</div>
					</div>

					<MainFooterActions />
				</header>
			</nav>
		</footer>
	)
}

export default MainSiteFooter
