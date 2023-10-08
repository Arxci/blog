import { cn } from '@/lib/utils'

export default function Skeleton({ className }: { className: string }) {
	return (
		<div
			className={cn(
				'bg-foreground/10 motion-safe:animate-pulse rounded',
				className
			)}
		/>
	)
}
