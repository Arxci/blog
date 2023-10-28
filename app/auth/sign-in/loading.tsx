import Skeleton from '@/components/skeletons/skeleton'
import AuthActionsLoading from '../components/auth-actions-loading'
import AuthHeaderLoading from '../components/auth-header-loading'
import AuthImageLoading from '../components/auth-image-loading'
import AuthFormSkeleton from '@/components/skeletons/auth-input-skeleton'
import AuthOAuthLoading from '../components/auth-oauth-loading'

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
						<div className="flex items-center justify-center bg-foreground/10 h-[40px] w-full rounded-xl">
							<Skeleton className="h-[10px] w-[50px] rounded-xl" />
						</div>
						<AuthOAuthLoading />
					</div>
				</div>
			</div>
		</div>
	)
}
