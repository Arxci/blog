'use client'

import { useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { useQueryString } from '@/hooks/useQueryString'
import { CheckboxGroup, Checkbox } from '@nextui-org/react'

import { siteConfig } from '@/config/site'

const CheckboxFilters = ({
	searchParams,
}: {
	searchParams: {
		mostRecent: string
		isFeatured: string
	}
}) => {
	const [groupSelected, setGroupSelected] = useState([])
	const router = useRouter()
	const pathname = usePathname()
	const { createQueryString } = useQueryString()

	const checkboxChangedHandle = (e: string[]) => {
		router.push(
			pathname +
				'?' +
				createQueryString([
					{
						name: 'mostRecent',
						value: e.includes('mostRecent')
							? e.includes('mostRecent').toString()
							: undefined,
					},
					{
						name: 'isFeatured',
						value: e.includes('isFeatured')
							? e.includes('isFeatured').toString()
							: undefined,
					},
					{ name: 'stop', value: undefined },
				])
		)
	}

	useEffect(() => {
		const { isFeatured, mostRecent } = searchParams
		const temp = []

		if (isFeatured === 'true') {
			temp.push('isFeatured')
		}

		if (mostRecent === 'true') {
			temp.push('mostRecent')
		}

		setGroupSelected(temp)
	}, [searchParams])

	return (
		<CheckboxGroup
			label="Filters"
			defaultValue={['buenos-aires', 'london']}
			orientation="horizontal"
			className="row-start-3 md:col-start-2 md:row-auto"
			value={groupSelected}
			//@ts-ignore
			onChange={checkboxChangedHandle}
			size="sm"
		>
			{siteConfig.checkboxFilters.map((filter) => (
				<Checkbox
					key={filter.value}
					value={filter.value}
				>
					{filter.label}
				</Checkbox>
			))}
		</CheckboxGroup>
	)
}

export default CheckboxFilters
