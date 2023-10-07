import type { Config } from 'tailwindcss'

const { nextui } = require('@nextui-org/react')

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: '#e11d48',
							foreground: '#FFFFFF',
						},
						secondary: {
							DEFAULT: '#fb7185',
							foreground: '#FFFFFF',
						},
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: '#6d28d9',
							foreground: '#FFFFFF',
						},
						secondary: {
							DEFAULT: '#fb7185',
							foreground: '#FFFFFF',
						},
					},
				},
			},
		}),
		require('@tailwindcss/typography'),
	],
}
export default config
