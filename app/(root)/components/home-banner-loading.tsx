import HomeBannerSkeleton from '@/components/skeletons/home-banner-skeleton'

const HomeBannerLoading = () => {
	return (
		<div className="w-full h-[350px] md:h-[400px]  relative z-1 overflow-hidden lg:rounded-b-2xl ">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<HomeBannerSkeleton />
			</div>
		</div>
	)
}

export default HomeBannerLoading
