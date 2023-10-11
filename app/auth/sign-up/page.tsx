import { Metadata } from 'next'

import SignUpForm from '@/components/forms/sign-up-form'
import AuthActions from '../components/auth-actions'
import AuthImage from '../components/auth-image'
import AuthHeader from '../components/auth-header'

import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
	title: siteConfig.name + ' Sign Up',
	description: 'Create an account to access all of the sites features',
}

const SignUp = () => {
	return (
		<div className="px-6 container relative min-h-[700px] h-screen items-center justify-center flex lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			<AuthActions
				label="Sign In"
				href="sign-in"
			/>
			<AuthImage />
			<div className="lg:p-8 w-full 0">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
					<AuthHeader
						heading="Create an account"
						subtext="Enter your information below to create an account"
					/>
					<SignUpForm />
				</div>
			</div>
		</div>
	)
}

export default SignUp
