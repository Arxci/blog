import { useCallback } from 'react'

import { useSearchParams } from 'next/navigation'

export const useQueryString = () => {
	const searchParams = useSearchParams()

	const createQueryString = useCallback(
		(newParams: { name: string; value: string | undefined }[]) => {
			const params = new URLSearchParams(searchParams)
			newParams.map((newParam) => {
				if (newParam.value !== undefined) {
					params.set(newParam.name, newParam.value)
				} else params.delete(newParam.name)
			})

			return params.toString()
		},
		[searchParams]
	)

	const getQueryString = useCallback(() => {
		const params = new URLSearchParams(searchParams)

		return params.toString()
	}, [searchParams])

	return { createQueryString, getQueryString }
}
