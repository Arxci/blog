import HomeBanner from './components/home-banner'
import RecentPosts from './components/recent-posts'

export default function Home() {
	return (
		<section className="h-screen w-full">
			<div className="container h-full flex flex-col gap-4">
				<HomeBanner />
				<div className="flex gap-4 h-full">
					<div className="flex-1 ">
						<RecentPosts />
					</div>
					<div className="flex-[.5] "></div>
				</div>
			</div>
		</section>
	)
}
