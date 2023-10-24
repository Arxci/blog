'use client'

import React, { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { Moon } from 'lucide-react'
import { Sun } from 'lucide-react'
import { Button } from '@nextui-org/react'

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()
	const isDarkMode = mounted && resolvedTheme === 'dark'

	useEffect(() => {
		setMounted(true)
	}, [])

	const themeChangeHandle = () => {
		if (isDarkMode) {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	if (!mounted) {
		return (
			<Button
				isIconOnly
				radius="full"
			>
				<Sun className="w-4 h-4" />
			</Button>
		)
	}

	return (
		<Button
			isIconOnly
			radius="full"
			onClick={themeChangeHandle}
			aria-label="Dark Mode Toggle"
		>
			{isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
			<span className="sr-only">Dark Mode</span>
		</Button>
	)
}

export default DarkModeButton
