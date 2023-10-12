import Skeleton from '@/components/ui/skeleton'

const RecentPostsLoading = () => {
	return (
		<div className="flex-[.4] py-6">
			<div className="h-[60px]">
				<Skeleton className="h-[30px] w-[150px] rounded-xl" />
			</div>
			<div className="flex flex-col gap-6 ">
				<Skeleton className="h-[300px] w-full rounded-xl" />
				<Skeleton className="h-[300px] w-full rounded-xl" />
			</div>
		</div>
	)
}

export default RecentPostsLoading
