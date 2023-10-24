import Skeleton from '@/components/skeletons/skeleton'

const AuthHeaderLoading = () => {
	return (
		<div className="flex flex-col space-y-2">
			<Skeleton className="h-7 w-full max-w-[220px] m-auto rounded-full" />
			<Skeleton className="h-5 w-full max-w-[320px] m-auto rounded-full" />
		</div>
	)
}

export default AuthHeaderLoading
