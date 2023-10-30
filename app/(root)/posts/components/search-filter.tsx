'use client'

import { KeyboardEvent, useEffect, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Input } from '@nextui-org/react'
import { useQueryString } from '@/hooks/useQueryString'

const SearchFilter = ({
	searchParams,
}: {
	searchParams: {
		search: string
	}
}) => {
	const [value, setValue] = useState<string>('')

	const router = useRouter()
	const pathname = usePathname()
	const { createQueryString } = useQueryString()

	const inputChangedHandle = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Escape') {
			setValue('')
			clearHandle()
		}
		if (e.key === 'Enter') {
			router.push(
				pathname +
					'?' +
					createQueryString([
						{ name: 'search', value: value === '' ? undefined : value },
						{ name: 'stop', value: undefined },
					])
			)
		}
	}

	const clearHandle = () => {
		router.push(
			pathname +
				'?' +
				createQueryString([
					{ name: 'search', value: undefined },
					{ name: 'stop', value: undefined },
				])
		)
	}

	useEffect(() => {
		const { search } = searchParams

		if (search !== undefined) setValue(search)
		else setValue('')
	}, [searchParams])

	return (
		<Input
			label="Search"
			size="sm"
			className="row-start-1 md:col-start-3 md:row-auto ]"
			isClearable
			placeholder="Type to search..."
			value={value}
			onValueChange={setValue}
			onKeyDown={inputChangedHandle}
			onClear={clearHandle}
			type="text"
			startContent={
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="w-4 h-4"
				/>
			}
		/>
	)
}

export default SearchFilter
