import Image from 'next/image'

import { siteConfig } from '@/config/site'
import HomeBannerForm from '@/components/forms/home-banner-form'

const HomeBanner = () => {
	return (
		<div className="w-full h-[350px] md:h-[400px] relative z-1 overflow-hidden lg:rounded-b-2xl lg:shadow-md">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<div className="relative h-full ">
					<Image
						className="object-cover object-right-bottom md:object-bottom"
						src="/HomeBanner.jpg"
						alt="Home Banner"
						placeholder="blur"
						blurDataURL={'/HomeBanner.jpg'}
						sizes="1024px, (max-width: 744px) 744px, (max-width: 500px) 500px, (max-width: 300px) 300px"
						fill
					/>
					<div className="absolute bg-gradient-to-t from-black/50 from-60% to--transparent h-full w-full" />
				</div>
			</div>

			<div className="h-full relative flex text-center flex-col items-center md:text-start md:items-start justify-center gap-4 px-4 md:px-6">
				<div className="space-y-2 mb-4">
					<h1 className="font-bold text-2xl md:text-5xl text-white">
						Welcome To {siteConfig.name}!
					</h1>
					<p className="text-white/80 hidden md:block">
						{siteConfig.description}
					</p>
					<p className="text-white/80 md:hidden">
						{siteConfig.name}: Your essential web development guide.
					</p>
				</div>
				<HomeBannerForm />
			</div>
		</div>
	)
}

export default HomeBanner
