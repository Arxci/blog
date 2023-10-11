import { Metadata } from 'next'

import SignInForm from '@/components/forms/sign-in-form'
import AuthActions from '../components/auth-actions'
import AuthImage from '../components/auth-image'
import AuthHeader from '../components/auth-header'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: siteConfig.name + ' Sign In',
	description: 'Sign into your account to access to all of the sites features',
}

const SignIn = async () => {
	return (
		<div className="px-6 container relative min-h-[700px] h-screen items-center justify-center flex lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<AuthActions
				label="Sign Up"
				href="sign-up"
			/>

			<AuthImage />
			<div className="lg:p-8 w-full">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
					<AuthHeader
						heading="Sign in to your account"
						subtext="Enter your email and password below to sign in"
					/>
					<SignInForm />
				</div>
			</div>
		</div>
	)
}

export default SignIn
