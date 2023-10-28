import Skeleton from '@/components/skeletons/skeleton'
import AuthActionsLoading from '../components/auth-actions-loading'
import AuthHeaderLoading from '../components/auth-header-loading'
import AuthImageLoading from '../components/auth-image-loading'
import AuthFormSkeleton from '@/components/skeletons/auth-input-skeleton'

export default function Loading() {
	return (
		<div className="px-6 container relative min-h-[700px] h-screen items-center justify-center flex lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<AuthActionsLoading />
			<AuthImageLoading />
			<div className="lg:p-8 w-full 0">
				<div className="mx-auto flex w-full flex-col justify-center space-y-7 sm:w-[450px]">
					<AuthHeaderLoading />
					<div className="space-y-6 w-full">
						<AuthFormSkeleton />
						<AuthFormSkeleton />
						<Skeleton className="h-[40px] w-full rounded-xl" />
					</div>
				</div>
			</div>
		</div>
	)
}
