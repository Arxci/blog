import MainSiteNav from '@/components/layout/main-site-nav'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<MainSiteNav />
			<main>{children}</main>
		</div>
	)
}
