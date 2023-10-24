import FeaturedPostSkeleton from '@/components/skeletons/featured-post-skeleton'
import Skeleton from '@/components/skeletons/skeleton'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<div className="flex flex-col md:flex-row gap-6">
					<div className="h-[50px] w-full rounded-xl bg-foreground/10 p-3 flex items-center justify-between">
						<div className="flex gap-2 flex-col justify-between">
							<Skeleton className="h-[10px] w-[50px] rounded-full" />
							<Skeleton className="h-[10px] w-[75px] rounded-full" />
						</div>
						<Skeleton className="h-[10px] w-[10px] rounded-full" />
					</div>
					<div className="h-[50px] w-full rounded-xl bg-foreground/10 p-3 flex flex-col gap-2">
						<Skeleton className="h-[10px] w-[50px] rounded-full" />
						<div className="flex gap-2">
							<Skeleton className="h-[10px] w-[10px] rounded-md" />
							<Skeleton className="h-[10px] w-[75px] rounded-full" />
							<Skeleton className="h-[10px] w-[10px] rounded-md" />
							<Skeleton className="h-[10px] w-[75px] rounded-full" />
						</div>
					</div>
					<div className="h-[50px] w-full rounded-xl bg-foreground/10 p-3 flex flex-col justify-between">
						<Skeleton className="h-[7.5px] w-[50px] rounded-full" />
						<div className="flex gap-2 items-center">
							<Skeleton className="h-[10px] w-[10px] rounded-full" />

							<Skeleton className="h-[10px] w-[75px] rounded-full" />
						</div>
					</div>
				</div>
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
			</div>
		</section>
	)
}
