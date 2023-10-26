import Link from 'next/link'

import { siteConfig } from '@/config/site'

const MainFooterLinks = () => {
	return (
		<ul className="flex gap-6 flex-col md:flex-row md:items-center justify-center w-full mb-5 md:mb-0">
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

export default MainFooterLinks
