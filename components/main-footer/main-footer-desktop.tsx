import Link from 'next/link'

import { siteConfig } from '@/config/site'

const MainFooterDesktop = () => {
	return (
		<ul className="flex gap-6 items-center">
			{siteConfig.mainNavLinks.map((link) => (
				<li key={link.id}>
					<Link
						href={link.href}
						className="hover:opacity-80"
					>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default MainFooterDesktop
