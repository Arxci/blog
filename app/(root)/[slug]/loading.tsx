import Skeleton from '@/components/skeletons/skeleton'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container  h-full flex flex-col gap-4 ">
				<Skeleton className="h-[300px] w-full sm:h-[450px] lg:rounded-b-xl" />
				<div className="px-4 md:px-6 flex flex-col gap-4">
					<Skeleton className="mt-10 h-[50px] w-full rounded-xl" />
					<Skeleton className="h-[50px] min-w-[300px] w-[40%] rounded-xl" />
					<div className="flex gap-2 flex-col sm:flex-row">
						<div className="flex gap-2">
							<Skeleton className="h-[25px] w-[150px] rounded-xl" />
							<Skeleton className="h-[25px] w-[150px] rounded-xl" />
						</div>
						<Skeleton className="h-[25px] w-[150px] rounded-xl" />
					</div>
					<Skeleton className="h-screen w-full rounded-xl" />
				</div>
			</div>
		</section>
	)
}
