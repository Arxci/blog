'use client'

import { KeyboardEvent, useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Input } from '@nextui-org/react'
import { useQueryString } from '@/hooks/useQueryString'

const SearchFilter = ({
	searchParams,
}: {
	searchParams: { search: string }
}) => {
	const [value, setValue] = useState<string>(() => {
		const { search } = searchParams

		console.log(search)

		if (search === undefined) return ''

		return search
	})
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
					])
			)
		}
	}

	const clearHandle = () => {
		router.push(
			pathname + '?' + createQueryString([{ name: 'search', value: undefined }])
		)
	}

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
