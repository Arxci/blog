'use client'

import { ThemeProvider as Provider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export interface NextThemesProviderProps {
	children: React.ReactNode
	themeProps?: ThemeProviderProps
}

const NextThemesProvider: React.FC<NextThemesProviderProps> = ({
	children,
	themeProps,
}) => {
	return <Provider {...themeProps}>{children}</Provider>
}

export default NextThemesProvider
