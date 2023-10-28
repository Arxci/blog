'use client'

import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { data: session } = useSession()
	const searchParams = useSearchParams()
	const router = useRouter()

	if (session) {
		router.push('/')
		return null
	}

	useEffect(() => {
		const callbackError = searchParams?.get('error')

		if (callbackError === 'OAuthAccountNotLinked') {
			toast.error('Whoops, there may already be an account with that email.')
		}
	}, [searchParams])

	return <div>{children}</div>
}

export default AuthProvider
