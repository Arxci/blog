import Skeleton from '@/components/ui/skeleton'

const AuthActionsLoading = () => {
	return (
		<>
			<Skeleton className="h-6 w-[120px] rounded-xl absolute left-4 top-6 lg:hidden " />
			<Skeleton className="h-6 w-[60px] rounded-xl absolute right-4 top-6" />
		</>
	)
}

export default AuthActionsLoading
