import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

import MainSiteNav from '@/components/layout/main-site-nav'
import MainSiteFooter from '@/components/layout/main-site-footer'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(authOptions)

	return (
		<div className="min-h-screen ">
			<MainSiteNav session={session} />
			<main className="min-h-[calc(100vh-65px-257px)] md:min-h-[calc(100vh-65px-150px)] ">
				{children}
			</main>
			<MainSiteFooter />
		</div>
	)
}
