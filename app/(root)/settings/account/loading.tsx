import Skeleton from '@/components/skeletons/skeleton'

export default function Loading() {
	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<Skeleton className="w-[100px] h-[20px] rounded-full" />
				<Skeleton className="w-[300px] h-[15px] rounded-full" />
			</div>
			<Skeleton className="w-full h-[2px] rounded-full" />

			<div className="bg-foreground/10 w-full p-6 flex justify-between items-center rounded-lg">
				<div className="space-y-2">
					<Skeleton className="w-[150px] h-[20px] rounded-full" />
					<Skeleton className="w-[300px] h-[15px] rounded-full" />
				</div>
				<Skeleton className="w-[75px] h-[30px] rounded-lg" />
			</div>
		</div>
	)
}
