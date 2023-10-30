'use client'

import { useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@nextui-org/react'

import { useQueryString } from '@/hooks/useQueryString'

const PaginationFilter = ({
	searchParams,
	maxCount,
	count,
}: {
	searchParams: {
		stop: string
	}
	maxCount: number
	count: number
}) => {
	const router = useRouter()
	const pathname = usePathname()
	const { createQueryString } = useQueryString()

	const loadMoreHandle = () => {
		const { stop } = searchParams

		let newStop = 4

		if (!stop) {
			newStop = newStop + 4
		} else {
			newStop = parseInt(stop) + 4
		}

		router.push(
			pathname +
				'?' +
				createQueryString([{ name: 'stop', value: newStop.toString() }]),
			{ scroll: false }
		)
	}

	const resetHandle = () => {
		router.push('/posts', { scroll: false })
	}

	return (
		<div className="mt-auto w-full">
			{maxCount === count ? undefined : (
				<Button
					onClick={loadMoreHandle}
					color="primary"
					className="w-full"
				>
					Load More
				</Button>
			)}
		</div>
	)
}

export default PaginationFilter
