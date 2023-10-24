'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Switch } from '@nextui-org/react'
import { Moon } from 'lucide-react'
import { Sun } from 'lucide-react'

const DarkModeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()
	const isDarkMode = mounted && resolvedTheme === 'dark'

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return

	const themeChangeHandle = (value: boolean) => {
		if (value) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	return (
		<Switch
			isSelected={isDarkMode}
			size="sm"
			color="primary"
			startContent={<Sun />}
			endContent={<Moon />}
			onValueChange={(value) => themeChangeHandle(value)}
		/>
	)
}

export default DarkModeSwitch
