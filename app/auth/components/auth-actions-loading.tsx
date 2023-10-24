import Skeleton from '@/components/skeletons/skeleton'

const AuthActionsLoading = () => {
	return (
		<>
			<Skeleton className="h-5 w-[120px] rounded-full absolute left-4 top-6 lg:hidden " />
			<Skeleton className="h-5 w-[60px] rounded-full absolute right-4 top-6" />
		</>
	)
}

export default AuthActionsLoading
