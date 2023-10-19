import Skeleton from '@/components/skeletons/skeleton'
import FeaturedPostSkeleton from '@/components/skeletons/featured-post-skeleton'

const FeaturedPostsLoading = () => {
	return (
		<div className="py-6 flex-1">
			<div className="h-[60px]">
				<Skeleton className="h-[45px] w-[200px] rounded-full" />
			</div>
			<div className="flex flex-col gap-6 ">
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
			</div>
		</div>
	)
}

export default FeaturedPostsLoading
