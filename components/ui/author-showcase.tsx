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
	return (
		<div className="flex gap-2 items-center ">
			<Avatar
				name={author[0].toUpperCase()}
				showFallback
				classNames={{
					base: cn(
						'bg-primary w-9 h-9 text-white flex items-center justify-center text-lg',
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
