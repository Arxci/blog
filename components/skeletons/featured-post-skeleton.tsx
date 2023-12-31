import Skeleton from './skeleton'

const FeaturedPostSkeleton = () => {
	return (
		<div className="bg-foreground/10 rounded-xl ">
			<div className="md:h-[241px] grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center p-5">
				<div className="relative mb-auto  bg-foreground/10 col-span-6 md:col-span-4 overflow-hidden w-full aspect-video h-full rounded-xl " />
				<div className="flex flex-col col-span-6 gap-4 md:col-span-8 overflow-hidden">
					<div className="flex justify-between items-start">
						<div className="flex flex-col gap-2 w-full">
							<div className="flex flex-col md:flex-row md:gap-6 md:items-center space-y-1 w-full ">
								<Skeleton className="h-[25px] w-full rounded-full " />
								<Skeleton className="h-[15px] w-[80px] rounded-full " />
							</div>
							<div className="flex gap-2 items-center">
								<Skeleton className="h-[30px] w-[30px] rounded-full " />
								<Skeleton className="h-[20px] w-[200px] rounded-full " />
							</div>

							<div className="flex gap-2">
								<Skeleton className="h-[20px] w-[80px] rounded-full " />
								<Skeleton className="h-[20px] w-[80px] rounded-full " />
							</div>
						</div>
					</div>
					<div className="flex gap-2 flex-col">
						<Skeleton className="h-[15px] w-full rounded-full " />
						<Skeleton className="h-[15px] w-[40%] rounded-full " />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeaturedPostSkeleton
