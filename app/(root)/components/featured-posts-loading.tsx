import Skeleton from '@/components/ui/skeleton'

const FeaturedPostsLoading = () => {
	return (
		<div className="py-6 flex-1">
			<div className="h-[60px]">
				<Skeleton className="h-[45px] w-[200px] rounded-xl" />
			</div>
			<div className="flex flex-col gap-6 ">
				<Skeleton className="h-[200px] w-full rounded-xl" />
				<Skeleton className="h-[200px] w-full rounded-xl" />
				<Skeleton className="h-[200px] w-full rounded-xl" />
			</div>
		</div>
	)
}

export default FeaturedPostsLoading
