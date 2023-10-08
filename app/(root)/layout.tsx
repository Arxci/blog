import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

import MainSiteNav from '@/components/layout/main-site-nav'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(authOptions)

	return (
		<div className="min-h-screen ">
			<MainSiteNav session={session} />
			<main className=" min-h-[calc(100vh-65px)]">{children}</main>
		</div>
	)
}
