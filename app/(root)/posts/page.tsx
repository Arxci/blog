import { Metadata } from 'next'

import { getPostWhere } from '@/lib/posts'
import FeaturedPost from '@/components/ui/featured-post'
import { siteConfig } from '@/config/site'
import TagFilters from './components/tag-filters'
import CheckboxFilters from './components/checkbox-filters'
import SearchFilter from './components/search-filter'
import NothingFound from './components/nothing-found'

export const metadata: Metadata = {
	title: siteConfig.name + ' Posts',
	description:
		'View my posts and learn more about web development. I cover a wide array of topics.',
}

const Posts = async ({
	searchParams,
}: {
	searchParams: {
		tag: string
		mostRecent: string
		isFeatured: string
		search: string
	}
}) => {
	const { tag, mostRecent, isFeatured, search } = searchParams

	const posts = getPostWhere({
		where: {
			tag,
			mostRecent: mostRecent === 'true',
			isFeatured: isFeatured === 'true',
			search,
			stop: 4,
		},
	})

	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
					<TagFilters searchParams={searchParams} />
					<CheckboxFilters searchParams={searchParams} />
					<SearchFilter searchParams={searchParams} />
				</div>

				{posts.length === 0 ? (
					<NothingFound />
				) : (
					posts &&
					posts.map((post) => (
						<FeaturedPost
							key={post.meta.id}
							slug={post.slug}
							{...post.meta}
						/>
					))
				)}
			</div>
		</section>
	)
}

export default Posts
