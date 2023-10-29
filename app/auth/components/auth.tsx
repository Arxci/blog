'use client'

import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

const Auth = () => {
	const { data: session } = useSession()
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const callbackError = searchParams?.get('error')

		if (callbackError === 'OAuthAccountNotLinked') {
			toast.error('Whoops, there may already be an account with that email.')
		}
	}, [searchParams])

	if (session) {
		router.push('/')
		return null
	}

	return <div />
}

export default Auth
