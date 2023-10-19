import RecentPostSkeleton from '@/components/skeletons/recent-post-skeleton'
import Skeleton from '@/components/skeletons/skeleton'

const RecentPostsLoading = () => {
	return (
		<div className="flex-[.4] py-6">
			<div className="h-[60px]">
				<Skeleton className="h-[30px] w-[150px] rounded-full" />
			</div>
			<div className="flex flex-col gap-6 ">
				<RecentPostSkeleton />
				<RecentPostSkeleton />
			</div>
		</div>
	)
}

export default RecentPostsLoading
