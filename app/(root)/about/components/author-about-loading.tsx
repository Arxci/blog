import Skeleton from '@/components/skeletons/skeleton'

const AuthorAboutLoading = () => {
	return (
		<div className="px-4 md:px-0 flex flex-col ">
			<Skeleton className="h-[50px] w-[300px] rounded-xl mb-10 " />
			<Skeleton className="h-[100px] w-full rounded-xl " />
			<Skeleton className="h-[30px] w-[300px] rounded-xl my-4" />
			<Skeleton className="h-[200px] w-full rounded-xl " />
			<Skeleton className="h-[30px] w-[300px] rounded-xl my-4" />
			<Skeleton className="h-[125px] w-full rounded-xl " />
		</div>
	)
}

export default AuthorAboutLoading
