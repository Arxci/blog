'use client'

import { useState } from 'react'

import { Select, SelectItem, Selection } from '@nextui-org/react'
import { ChevronsUpDown } from 'lucide-react'

import { siteConfig } from '@/config/site'

const TagSelect = () => {
	const [value, setValue] = useState<Selection>(new Set([]))

	return (
		<Select
			label="Filter by tag"
			className="max-w-xs"
			selectedKeys={value}
			size="sm"
			onSelectionChange={setValue}
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
