'use client'

import { useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import { CheckboxGroup, Checkbox } from '@nextui-org/react'

import { siteConfig } from '@/config/site'

const CheckboxSelect = ({
	searchParams,
}: {
	searchParams: { isFeatured: string; mostRecent: string }
}) => {
	const [groupSelected, setGroupSelected] = useState(() => {
		var { isFeatured, mostRecent } = searchParams
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
	const { createQueryString } = useCreateQueryString()

	const checkboxChangedHandle = (e) => {
		setGroupSelected(e)

		router.push(
			pathname +
				'?' +
				createQueryString([
					{ name: 'mostRecent', value: e.includes('mostRecent') },
					{ name: 'isFeatured', value: e.includes('isFeatured') },
				])
		)
	}

	return (
		<CheckboxGroup
			label="Filters"
			defaultValue={['buenos-aires', 'london']}
			orientation="horizontal"
			value={groupSelected}
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

export default CheckboxSelect
