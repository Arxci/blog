interface SiteConfigProps {
	name: string
	tagLine: string
	description: string
	mainNavLinks: {
		id: number
		title: string
		href: string
	}[]
	tagFilters: {
		label: string
		value: string
	}[]
	checkboxFilters: {
		label: string
		value: string
	}[]
}

export const siteConfig: SiteConfigProps = {
	name: 'Code Chronicles',
	tagLine: 'Your Guide to Web Development',
	description: `Code Chronicles: Your essential web development guide. Explore HTML, CSS, JavaScript, and more. Unlock the secrets of coding, design, and tech trends. Your compass for creating digital wonders.`,
	mainNavLinks: [
		{
			id: 0,
			title: 'Home',
			href: '/',
		},
		{
			id: 1,
			title: 'Posts',
			href: '/posts',
		},
		{
			id: 2,
			title: 'About',
			href: '/about',
		},
		{
			id: 3,
			title: 'Contact',
			href: '/contact',
		},
	],
	tagFilters: [
		{ label: 'NextJS', value: 'NextJS' },
		{ label: 'Markdown', value: 'Markdown' },
		{ label: 'NextThemes', value: 'NextThemes' },
		{ label: 'Nodemailer', value: 'Nodemailer' },
	],

	checkboxFilters: [
		{ label: 'Most Recent', value: 'mostRecent' },
		{ label: 'Featured', value: 'isFeatured' },
	],
}
