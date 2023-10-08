import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { siteConfig } from '@/config/site'
import NextUIProvider from '@/providers/NextUIProvider'
import { Toaster } from 'sonner'

import './globals.css'

import SessionProvider from '@/providers/SessionProvier'
import NextThemesProvider from '@/providers/NextThemesProvider'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: siteConfig.name,
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
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={font.className}>
				<NextUIProvider>
					<SessionProvider>
						<NextThemesProvider
							themeProps={{ attribute: 'class', defaultTheme: 'dark' }}
						>
							<Toaster closeButton />
							{children}
						</NextThemesProvider>
					</SessionProvider>
				</NextUIProvider>
			</body>
		</html>
	)
}
