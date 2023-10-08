import Image from 'next/image'
import Link from 'next/link'

import SignInForm from '@/components/forms/sign-in-form'
import { siteConfig } from '@/config/site'
import AuthActions from '../components/auth-actions'

const SignIn = async () => {
	return (
		<div className="px-6 container relative min-h-[700px] h-screen items-center justify-center flex lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<AuthActions
				label="Sign Up"
				href="sign-up"
			/>

			<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
				<div className="-z-1 absolute w-full h-full top-0 left-0 ">
					<div className="relative h-full ">
						<Image
							className="object-cover object-right-bottom"
							src="/HomeBannerHighRes.jpg"
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
			<div className="lg:p-8 w-full">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">
							Sign in to your account
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email and password below to sign in
						</p>
					</div>
					<SignInForm />
				</div>
			</div>
		</div>
	)
}

export default SignIn
