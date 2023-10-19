import Skeleton from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<Skeleton className="h-[45px] w-[200px] sm:hidden rounded-xl" />

				<Skeleton className="h-[55px] w-[350px] hidden sm:block rounded-xl" />
				<div className="flex flex-col md:flex-row gap-6">
					<Skeleton className="h-[50px] w-full rounded-xl" />
					<Skeleton className="h-[50px] w-full rounded-xl" />
					<Skeleton className="h-[50px] w-full rounded-xl" />
				</div>
				<Skeleton className="h-[200px] w-full rounded-xl" />
				<Skeleton className="h-[200px] w-full rounded-xl" />
				<Skeleton className="h-[200px] w-full rounded-xl" />
				<Skeleton className="h-[200px] w-full rounded-xl" />
			</div>
		</section>
	)
}
