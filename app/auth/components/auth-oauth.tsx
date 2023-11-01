import { Button } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'

const AuthOAuth = ({ loading }: { loading: boolean }) => {
	return (
		<>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
			<div className="w-full flex gap-2">
				<Button
					variant="bordered"
					className="w-full"
					type="button"
					size="lg"
					onClick={() =>
						signIn('github', { redirect: false, callbackUrl: '/' })
					}
					isDisabled={loading}
				>
					<FontAwesomeIcon
						className="h-4 w-4"
						icon={faGithub}
					/>
					Github
				</Button>

				<Button
					variant="bordered"
					className="w-full"
					type="button"
					size="lg"
					onClick={() =>
						signIn('google', { redirect: false, callbackUrl: '/' })
					}
					isDisabled={loading}
				>
					<FontAwesomeIcon
						className="h-4 w-4"
						icon={faGoogle}
					/>
					Google
				</Button>
			</div>
		</>
	)
}

export default AuthOAuth
