import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

const AuthImage = () => {
	return (
		<div className="relative hidden h-full flex-col bg-muted p-10 text-white  lg:flex">
			<div className="-z-1 absolute w-full h-full top-0 left-0 ">
				<div className="relative h-full ">
					<Image
						className="object-cover object-right-bottom"
						src="/banners/HomeBannerHighRes.jpg"
						priority
						alt="Home Banner"
						sizes="2000px, (max-width: 1500px) 1000px, (max-width: 1024px) 512px"
						fill
					/>
					<div className="absolute bg-gradient-to-t from-black/60 to--transparent h-full w-full" />
				</div>
			</div>
			<div className="relative z-20 flex items-center ">
				<Link
					href="/"
					className="text-white text-xl font-medium"
				>
					{siteConfig.name}
				</Link>
			</div>
			<div className="relative z-20 mt-auto">
				<p className="text-lg">{siteConfig.description}</p>
			</div>
		</div>
	)
}

export default AuthImage
