import MainSiteNav from '@/components/layout/main-site-nav'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="h-screen ">
			<MainSiteNav />
			<main className=" h-[calc(100vh-65px)]">{children}</main>
		</div>
	)
}
