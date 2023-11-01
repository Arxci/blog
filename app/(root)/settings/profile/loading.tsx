import Skeleton from '@/components/skeletons/skeleton'

export default function Loading() {
	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<Skeleton className="w-[100px] h-[20px] rounded-full" />
				<Skeleton className="w-[300px] h-[15px] rounded-full" />
			</div>
			<Skeleton className="w-full h-[2px] rounded-full" />

			<div className="space-y-8">
				<div className="space-y-2">
					<Skeleton className="w-[100px] h-[15px] rounded-full" />
					<div className="bg-foreground/10 w-full h-[40px] flex items-center p-2 rounded-lg">
						<Skeleton className="w-[100px] h-[10px] rounded-full" />
					</div>
					<Skeleton className="w-full h-[15px] rounded-full" />
				</div>
				<Skeleton className="w-[200px] h-[40px] rounded-lg" />
			</div>
		</div>
	)
}
