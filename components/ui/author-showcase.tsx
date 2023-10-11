'use client'

import { Avatar } from '@nextui-org/react'

const AuthorShowcase = ({ author }: { author: string }) => {
	const authorInitials = author.split(' ')[0][0] + author.split(' ')[1][0]

	return (
		<div className="flex gap-2 items-center ">
			<Avatar
				name={authorInitials}
				showFallback
				classNames={{
					base: 'bg-primary w-8 h-8 text-foreground flex items-center justify-center',
				}}
			/>
			<p className="text-primary text-sm font-bold">@{author}</p>
		</div>
	)
}

export default AuthorShowcase
