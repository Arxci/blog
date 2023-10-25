'use client'

import { cn } from '@/lib/utils'
import { Avatar } from '@nextui-org/react'

const AuthorShowcase = ({
	author,
	className,
	avatarClassName,
}: {
	author: string
	className?: string
	avatarClassName?: string
}) => {
	const authorInitials = author.split(' ')[0][0] + author.split(' ')[1][0]

	return (
		<div className="flex gap-2 items-center ">
			<Avatar
				name={authorInitials}
				showFallback
				classNames={{
					base: cn(
						'bg-primary w-8 h-8 text-white flex items-center justify-center',
						avatarClassName
					),
				}}
			/>
			<p className={cn('text-primary text-sm font-bold', className)}>
				@{author}
			</p>
		</div>
	)
}

export default AuthorShowcase
