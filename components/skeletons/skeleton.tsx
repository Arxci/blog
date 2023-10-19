import { cn } from '@/lib/utils'

export default function Skeleton({
	className,
	children,
}: {
	className?: string
	children?: React.ReactNode
}) {
	return (
		<div
			className={cn(
				'bg-foreground/20 motion-safe:animate-pulse rounded',
				className
			)}
		>
			{children}
		</div>
	)
}
