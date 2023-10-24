import FeaturedPostsLoading from './components/featured-posts-loading'
import HomeBannerLoading from './components/home-banner-loading'
import RecentPostsLoading from './components/recent-posts-loading'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4">
				<HomeBannerLoading />
				<div className="flex flex-col h-full px-4 md:px-6">
					<RecentPostsLoading />
					<FeaturedPostsLoading />
				</div>
			</div>
		</section>
	)
}
