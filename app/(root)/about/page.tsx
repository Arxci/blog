import { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import AuthorHeading from './components/author-heading'
import AuthorAbout from './components/author-about'

export const metadata: Metadata = {
	title: siteConfig.name + ' About Me',
	description: 'Get to know more about me, the author',
}

const Posts = () => {
	return (
		<section className="h-full w-full">
			<div className="container h-full flex flex-col gap-4  md:px-6 py-6">
				<AuthorHeading />
				<AuthorAbout />
			</div>
		</section>
	)
}

export default Posts
