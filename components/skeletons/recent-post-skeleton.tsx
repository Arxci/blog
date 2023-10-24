import Skeleton from './skeleton'

const RecentPostSkeleton = () => {
	return (
		<div className=" group aspect-video relative ">
			<Skeleton className="w-full h-full bg-foreground/10 rounded-xl" />
			<div className="px-2 pt-2 flex flex-col gap-2">
				<Skeleton className="rounded-full h-[20px] w-full" />
				<Skeleton className="rounded-full h-[15px] w-[100px]" />
			</div>
		</div>
	)
}

export default RecentPostSkeleton
