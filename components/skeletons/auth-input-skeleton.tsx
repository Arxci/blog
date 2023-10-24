'use client'

import Skeleton from './skeleton'

const AuthFormSkeleton = () => {
	return (
		<div className="w-full h-[55px] bg-foreground/10 rounded-2xl p-3 flex flex-col gap-2 justify-between">
			<Skeleton className="h-4 w-[50px] rounded-full" />
			<Skeleton className="h-4 w-[200px] rounded-full" />
		</div>
	)
}

export default AuthFormSkeleton
