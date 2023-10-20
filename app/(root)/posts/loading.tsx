import FeaturedPostSkeleton from '@/components/skeletons/featured-post-skeleton'
import Skeleton from '@/components/skeletons/skeleton'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<Skeleton className="h-[45px] w-[200px] sm:hidden rounded-full" />
				<Skeleton className="h-[40px] w-[350px] hidden sm:block rounded-full" />
				<div className="flex flex-col md:flex-row gap-6">
					<Skeleton className="h-[50px] w-full rounded-xl" />
					<Skeleton className="h-[50px] w-full rounded-xl" />
					<Skeleton className="h-[50px] w-full rounded-xl" />
				</div>
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
				<FeaturedPostSkeleton />
			</div>
		</section>
	)
}
