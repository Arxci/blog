'use client'

import { useSession, signOut } from 'next-auth/react'

import {
	Avatar,
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
	User,
	Switch,
	AvatarIcon,
} from '@nextui-org/react'

const UserButton = () => {
	const { data: session } = useSession()

	if (!session) {
		return
	}

	const userInitials = session?.user?.firstName[0] + session?.user?.lastName[0]

	return (
		<Dropdown
			showArrow
			radius="sm"
			classNames={{
				base: 'p-0 border-small border-divider bg-background',
				arrow: 'bg-background',
			}}
		>
			<DropdownTrigger>
				<Button
					isIconOnly={true}
					className="rounded-full "
					variant="solid"
				>
					<Avatar
						src={session?.user?.image || '/'}
						name={userInitials}
						showFallback
						classNames={{
							base: 'bg-foreground text-background focus-within:bg-foreground',
						}}
					/>
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				className="p-3"
				closeOnSelect={false}
				itemClasses={{
					base: [
						'rounded-md',
						'text-default-500',
						'transition-opacity',
						'data-[hover=true]:text-foreground',
						'data-[hover=true]:bg-default-100',
						'dark:data-[hover=true]:bg-default-50',
						'data-[selectable=true]:focus:bg-default-50',
						'data-[pressed=true]:opacity-70',
						'data-[focus-visible=true]:ring-default-500',
					],
				}}
			>
				<DropdownSection
					aria-label="Profile & Actions"
					showDivider
				>
					<DropdownItem
						isReadOnly
						className="h-14 gap-2 opacity-100 !hover:bg-background"
					>
						<User
							name={session?.user?.name}
							description={`@${session?.user?.email}`}
							classNames={{
								name: 'text-default-600',
								description: 'text-default-500',
							}}
							avatarProps={{
								showFallback: true,
								name: userInitials,
								className: 'bg-foreground text-background',
								size: 'sm',
								src: session?.user?.image || '/',
							}}
						/>
					</DropdownItem>
					<DropdownItem
						endContent={<Switch />}
						description="Change your color theme"
					>
						<span>Dark Mode</span>
					</DropdownItem>
				</DropdownSection>
				<DropdownSection>
					<DropdownItem
						description="Sign out of your account"
						onClick={() => signOut()}
					>
						Log Out
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	)
}

export default UserButton
