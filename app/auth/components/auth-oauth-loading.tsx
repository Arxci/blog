import Skeleton from '@/components/skeletons/skeleton'

const AuthOAuthLoading = () => {
	return (
		<>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						<Skeleton className="h-[10px] w-[125px] rounded-full" />
					</span>
				</div>
			</div>
			<div className="w-full flex gap-2">
				<div className="flex items-center space-x-2 justify-center bg-foreground/10 h-[45px] w-full rounded-xl">
					<Skeleton className="h-[15px] w-[15px] rounded-full" />
					<Skeleton className="h-[15px] w-[75px] rounded-full" />
				</div>

				<div className="flex items-center space-x-2 justify-center bg-foreground/10 h-[45px] w-full rounded-xl">
					<Skeleton className="h-[15px] w-[15px] rounded-full" />
					<Skeleton className="h-[15px] w-[75px] rounded-full" />
				</div>
			</div>
		</>
	)
}

export default AuthOAuthLoading
