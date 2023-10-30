import Skeleton from '@/components/skeletons/skeleton'

const PostHeadingLoading = () => {
	return (
		<div className="space-y-4 py-6">
			<Skeleton className="h-[30px] w-full rounded-full" />
			<Skeleton className="h-[30px] w-[40%] rounded-full" />
			<div className="flex flex-col sm:flex-row gap-2 sm:items-center">
				<div className="flex gap-2 items-center">
					<Skeleton className="h-[30px] w-[30px] rounded-full" />
					<Skeleton className="h-[15px] w-[100px] rounded-full" />
				</div>
				<Skeleton className="h-[7.5px] w-[7.5px] rounded-full hidden sm:block " />
				<Skeleton className="h-[15px] w-[125px] rounded-full" />
				<Skeleton className="h-[7.5px] w-[7.5px] rounded-full hidden sm:block " />
				<div className="flex gap-2 items-center">
					<Skeleton className="h-[20px] w-[80px] rounded-full" />
					<Skeleton className="h-[20px] w-[80px] rounded-full" />
					<Skeleton className="h-[20px] w-[80px] rounded-full" />
				</div>
			</div>
			<Skeleton className="h-[2px] w-full rounded-full" />
		</div>
	)
}

export default PostHeadingLoading
