'use client'

import { useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { Select, SelectItem, Selection } from '@nextui-org/react'
import { ChevronsUpDown } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { useCreateQueryString } from '@/hooks/useCreateQueryString'

const TagSelect = ({ searchParams }: { searchParams: { tag: string } }) => {
	const [currentTag, setCurrentTag] = useState<Selection>(() => {
		var isValidTag = false

		siteConfig.tagFilters.forEach((tag) => {
			if (Object.values(tag).includes(searchParams.tag)) {
				isValidTag = true
				return
			}
		})

		if (isValidTag) {
			return new Set([searchParams.tag])
		}

		return new Set([])
	})

	const router = useRouter()
	const pathname = usePathname()
	const { createQueryString } = useCreateQueryString()

	const selectionChangedHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
		router.push(
			pathname +
				'?' +
				createQueryString([{ name: 'tag', value: e.target.value }])
		)
	}

	return (
		<Select
			label="Filter by tag"
			placeholder="Select an tag"
			className="max-w-xs"
			selectedKeys={currentTag}
			size="sm"
			onChange={selectionChangedHandle}
			onSelectionChange={setCurrentTag}
			disableSelectorIconRotation
			selectorIcon={<ChevronsUpDown />}
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

export default TagSelect
