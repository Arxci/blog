import Skeleton from '@/components/skeletons/skeleton'
import FeaturedPostSkeleton from '@/components/skeletons/featured-post-skeleton'

const FeaturedPostsLoading = () => {
	return (
		<div className="my-6">
			<Skeleton className="mb-6 h-[30px] w-[200px] rounded-full" />

			<div className="flex flex-col gap-6 ">
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
			</div>
		</div>
	)
}

export default FeaturedPostsLoading
