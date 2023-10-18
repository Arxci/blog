'use client'

import { useState, ChangeEvent } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { Select, SelectItem, Selection } from '@nextui-org/react'

import { siteConfig } from '@/config/site'
import { useQueryString } from '@/hooks/useQueryString'

const TagFilters = ({ searchParams }: { searchParams: { tag: string } }) => {
	const [currentTag, setCurrentTag] = useState<Selection>(() => {
		const { tag } = searchParams
		var isValidTag = false

		siteConfig.tagFilters.forEach((_tag) => {
			if (Object.values(_tag).includes(tag)) {
				isValidTag = true
				return
			}
		})

		if (isValidTag) {
			return new Set([tag])
		}

		return new Set([])
	})

	const router = useRouter()
	const pathname = usePathname()
	const { createQueryString } = useQueryString()

	const selectionChangedHandle = (e: ChangeEvent<HTMLSelectElement>) => {
		const { value } = e.target

		router.push(
			pathname +
				'?' +
				createQueryString([
					{ name: 'tag', value: value === '' ? undefined : value },
				])
		)
	}

	return (
		<Select
			label="Filter by tag"
			placeholder="Select an tag"
			selectedKeys={currentTag}
			size="sm"
			className="row-start-2 md:row-auto "
			onChange={selectionChangedHandle}
			onSelectionChange={setCurrentTag}
		>
			{siteConfig.tagFilters.map((tag) => (
				<SelectItem
					key={tag.value}
					value={tag.value}
					className="hover:bg-foreground/10"
				>
					{tag.label}
				</SelectItem>
			))}
		</Select>
	)
}

export default TagFilters
