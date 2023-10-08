import RecentPost from '@/components/ui/recent-post'

const RecentPosts = () => {
	return (
		<div className="flex-[.4] py-6">
			<h2 className="text-xl text-foreground/60 h-[60px]">Recent Posts</h2>
			<div className="flex flex-col gap-6 ">
				<RecentPost />
				<RecentPost />
			</div>
		</div>
	)
}

export default RecentPosts
