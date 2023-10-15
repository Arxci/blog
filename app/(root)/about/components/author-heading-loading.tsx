import Skeleton from '@/components/ui/skeleton'

const AuthorHeadingLoading = () => {
	return (
		<div className="flex gap-4 flex-1 border-b md:border-none px-4 md:px-0">
			<div className="py-10 flex-col text-center md:text-left md:flex-row flex gap-4 w-full items-center">
				<Skeleton className="h-[60px] w-[60px] rounded-full" />
				<div className="flex flex-col gap-2">
					<Skeleton className="h-[20px] w-[200px] rounded-xl" />
					<Skeleton className="h-[20px] w-[120px] rounded-xl" />
				</div>
				<div className="md:ml-auto flex gap-2 items-center">
					<Skeleton className="h-[20px] w-[120px] rounded-xl" />
				</div>
			</div>
		</div>
	)
}

export default AuthorHeadingLoading
