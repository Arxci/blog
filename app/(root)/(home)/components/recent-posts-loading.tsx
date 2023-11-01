import RecentPostSkeleton from '@/components/skeletons/recent-post-skeleton'
import Skeleton from '@/components/skeletons/skeleton'

const RecentPostsLoading = () => {
	return (
		<div className="my-6">
			<Skeleton className="mb-6 h-[30px] w-[200px] rounded-full" />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
				<RecentPostSkeleton />
				<RecentPostSkeleton />
				<RecentPostSkeleton />
			</div>
		</div>
	)
}

export default RecentPostsLoading
