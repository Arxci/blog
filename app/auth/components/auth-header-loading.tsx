import Skeleton from '@/components/ui/skeleton'

const AuthHeaderLoading = () => {
	return (
		<div className="flex flex-col space-y-2">
			<Skeleton className="h-10 w-full max-w-[240px] m-auto rounded-xl" />
			<Skeleton className="h-8 w-full max-w-[300px] m-auto rounded-xl" />
		</div>
	)
}

export default AuthHeaderLoading
