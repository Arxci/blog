'use client'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const NothingFound = () => {
	const router = useRouter()

	const clearFiltersHandle = () => {
		router.push('/posts')
		router.refresh()
	}

	return (
		<div className="w-full flex flex-col md:flex-row items-center justify-center text-center mt-20 space-y-2 md:space-x-6 md:space-y-0">
			<a>Nothing found. Please adjust your filters and try again</a>
			<Button
				color="primary"
				onClick={clearFiltersHandle}
				radius="full"
				variant="light"
			>
				Clear Filters
			</Button>
		</div>
	)
}

export default NothingFound
