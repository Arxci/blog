import Skeleton from './skeleton'

const HomeBannerSkeleton = () => {
	return (
		<div className=" h-full w-full lg:rounded-b-xl bg-foreground/10 overflow-hidden">
			<div className="relative h-full flex text-center flex-col items-center md:text-start md:items-start justify-center gap-4 px-4 md:px-6">
				<div className="space-y-4 mb-4 w-full flex flex-col items-center md:items-start">
					<Skeleton className="h-[40px] w-[80%] max-w-[300px] rounded-full" />
					<Skeleton className="h-[15px] w-full rounded-full" />
					<Skeleton className="h-[15px] md:hidden w-full rounded-full" />
					<Skeleton className="h-[15px] md:hidden w-full rounded-full" />
					<Skeleton className="h-[15px] w-[60%] hidden md:block   rounded-full" />
				</div>
				<div className="h-[45px] w-full rounded-full bg-foreground/10 p-3 flex items-center gap-4">
					<Skeleton className="w-[20px] h-[20px] rounded-full" />
					<Skeleton className="w-[200px] h-[20px] rounded-full" />
				</div>
			</div>
		</div>
	)
}

export default HomeBannerSkeleton
