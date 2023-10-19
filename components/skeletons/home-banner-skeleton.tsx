import Skeleton from './skeleton'

const HomeBannerSkeleton = () => {
	return (
		<div className=" border-1  h-full w-full lg:rounded-b-xl bg-foreground/10 overflow-hidden">
			<div className="relative h-full flex text-center flex-col items-center md:text-start md:items-start justify-center gap-4 px-4 md:px-6">
				<Skeleton className="h-[40px] w-full max-w-[400px] rounded-full" />
				<Skeleton className="h-[20px] w-full rounded-full" />
				<Skeleton className="h-[20px] md:hidden w-full rounded-full" />
				<Skeleton className="h-[20px] w-[60%] hidden md:block   rounded-full" />
				<Skeleton className="h-[40px] w-[180px] rounded-full" />
			</div>
		</div>
	)
}

export default HomeBannerSkeleton
