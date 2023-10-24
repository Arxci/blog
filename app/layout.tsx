import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import { siteConfig } from '@/config/site'
import NextUIProvider from '@/providers/next-ui-provider'
import { Toaster } from 'sonner'

import './globals.css'

import SessionProvider from '@/providers/session-provider'
import NextThemesProvider from '@/providers/next-themes-provider'

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
							themeProps={{ attribute: 'class', defaultTheme: 'system' }}
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
