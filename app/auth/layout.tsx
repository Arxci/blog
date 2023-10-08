import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: siteConfig.name + ' auth page',
	description: siteConfig.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <main className=" min-h-screen ">{children}</main>
}
