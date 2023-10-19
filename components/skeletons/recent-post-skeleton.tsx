import Skeleton from './skeleton'

const RecentPostSkeleton = () => {
	return (
		<div className="h-[300px] bg-foreground/10  w-full rounded-xl">
			<div className="p-3 flex gap-2 flex-col">
				<Skeleton className="w-full h-[15px] rounded-xl" />
				<Skeleton className="w-[60%] h-[15px] rounded-xl" />
				<Skeleton className="w-full h-[30px] rounded-xl" />
				<Skeleton className="w-[100px] h-[15px] rounded-xl" />
			</div>
		</div>
	)
}

export default RecentPostSkeleton
