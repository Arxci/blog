import Skeleton from '@/components/skeletons/skeleton'

const AuthHeaderLoading = () => {
	return (
		<div className="flex flex-col space-y-2">
			<Skeleton className="h-9 w-full max-w-[220px] m-auto rounded-xl" />
			<Skeleton className="h-6 w-full max-w-[320px] m-auto rounded-lg" />
		</div>
	)
}

export default AuthHeaderLoading
