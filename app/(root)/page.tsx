import HomeBanner from './components/home-banner'
import FeaturedPosts from './components/featured-posts'
import RecentPosts from './components/recent-posts'

export default function Home() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4">
				<HomeBanner />
				<div className="flex flex-col md:flex-row gap-4 h-full px-4 md:px-6">
					<FeaturedPosts />
					<RecentPosts />
				</div>
			</div>
		</section>
	)
}
