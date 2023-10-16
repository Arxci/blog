import { useCallback } from 'react'

import { useSearchParams } from 'next/navigation'

export const useCreateQueryString = () => {
	const searchParams = useSearchParams()

	const createQueryString = useCallback(
		(newParams: { name: string; value: string }[]) => {
			const params = new URLSearchParams(searchParams)
			newParams.map((newParam) => params.set(newParam.name, newParam.value))

			return params.toString()
		},
		[searchParams]
	)

	return { createQueryString }
}
