import Skeleton from '@/components/ui/skeleton'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container  h-full flex flex-col gap-4 px-4 md:px-6 py-6">
				<Skeleton className="h-[300px] sm:h-[450px] lg:rounded-b-xl" />
				<Skeleton className="mt-10 h-[45px] w-full rounded-xl" />
				<div className="flex gap-2 flex-col sm:flex-row">
					<div className="flex gap-2">
						<Skeleton className="h-[25px] w-[150px] rounded-xl" />
						<Skeleton className="h-[25px] w-[150px] rounded-xl" />
					</div>
					<Skeleton className="h-[25px] w-[150px] rounded-xl" />
				</div>
				<Skeleton className="h-screen w-full rounded-xl" />
			</div>
		</section>
	)
}
