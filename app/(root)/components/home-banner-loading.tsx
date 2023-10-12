import Skeleton from '@/components/ui/skeleton'

const HomeBannerLoading = () => {
	return (
		<div className="w-full h-[500px] md:h-[400px] relative z-1 overflow-hidden lg:rounded-b-2xl lg:shadow-md">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<Skeleton className="h-full w-full rounded-b-xl" />
			</div>
		</div>
	)
}

export default HomeBannerLoading
