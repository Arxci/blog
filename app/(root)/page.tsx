import HomeBanner from './components/home-banner'
import FeaturedPosts from './components/featured-posts'
import RecentPosts from './components/recent-posts'
import HomeBannerLoading from './components/home-banner-loading'

export default function Home() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4">
				<HomeBanner />
				<HomeBannerLoading />
				<div className="flex flex-col h-full px-4 md:px-6">
					<RecentPosts />
					<FeaturedPosts />
				</div>
			</div>
		</section>
	)
}
