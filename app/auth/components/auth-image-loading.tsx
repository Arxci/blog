import Skeleton from '@/components/skeletons/skeleton'

const AuthImageLoading = () => {
	return (
		<div className="relative hidden w-full h-full lg:flex bg-foreground/10 rounded-none p-10 lg:flex-col">
			<Skeleton className="h-[25px] w-[175px] rounded-full" />
			<div className="mt-auto space-y-2">
				<Skeleton className="h-[20px] w-full rounded-full" />
				<Skeleton className="h-[20px] w-full rounded-full" />
				<Skeleton className="h-[20px] w-[40%] rounded-full" />
			</div>
		</div>
	)
}

export default AuthImageLoading
