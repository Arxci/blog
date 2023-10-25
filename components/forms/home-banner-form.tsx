'use client'

import { KeyboardEvent, useState } from 'react'

import { useRouter } from 'next/navigation'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useQueryString } from '@/hooks/useQueryString'

const formSchema = z.object({
	search: z.string().optional(),
})

type HomeBannerFormValues = z.infer<typeof formSchema>

const HomeBannerForm = () => {
	const [value, setValue] = useState('')
	const router = useRouter()

	const { createQueryString } = useQueryString()

	const defaultValues = {
		search: '',
	}

	const form = useForm<HomeBannerFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const submitFormHandle = async (data: HomeBannerFormValues) => {
		router.push(
			'/posts/' +
				'?' +
				createQueryString([
					{ name: 'search', value: value === '' ? undefined : value },
				])
		)
	}

	return (
		<form
			className="flex gap-2 items-center w-full ml-auto md:justify-end"
			onSubmit={form.handleSubmit((data) => submitFormHandle(data))}
		>
			<Input
				{...form.register('search')}
				size="lg"
				type="text"
				isClearable
				radius="full"
				onValueChange={setValue}
				value={value}
				onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
					if (e.key === 'Escape') {
						setValue('')
					}
				}}
				variant="flat"
				className="w-full "
				placeholder="Search for a post"
				startContent={
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className="w-4 h-4 text-primary"
					/>
				}
			/>
		</form>
	)
}

export default HomeBannerForm
