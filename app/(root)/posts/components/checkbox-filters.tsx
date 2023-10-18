'use client'

import { useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { useQueryString } from '@/hooks/useQueryString'
import { CheckboxGroup, Checkbox } from '@nextui-org/react'

import { siteConfig } from '@/config/site'

const CheckboxFilters = ({
	searchParams,
}: {
	searchParams: { isFeatured: string; mostRecent: string }
}) => {
	const [groupSelected, setGroupSelected] = useState(() => {
		const { isFeatured, mostRecent } = searchParams
		const temp = []

		if (isFeatured === 'true') {
			temp.push('isFeatured')
		}

		if (mostRecent === 'true') {
			temp.push('mostRecent')
		}

		return temp
	})
	const router = useRouter()
	const pathname = usePathname()
	const { createQueryString } = useQueryString()

	const checkboxChangedHandle = (e: string[]) => {
		setGroupSelected(e)

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
				])
		)
	}

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
