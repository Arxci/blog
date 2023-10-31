'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

const Auth = () => {
	const searchParams = useSearchParams()

	useEffect(() => {
		const callbackError = searchParams?.get('error')

		if (callbackError === 'OAuthAccountNotLinked') {
			toast.error('Whoops, there may already be an account with that email.', {
				id: 1,
			})
		}

		return () => {
			toast.dismiss(1)
		}
	}, [searchParams])

	return <div />
}

export default Auth
