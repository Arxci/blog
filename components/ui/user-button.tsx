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
	Skeleton,
} from '@nextui-org/react'
import {
	faArrowRightFromBracket,
	faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DarkModeSwitch from './dark-mode-switch'

const UserButton = () => {
	const { data: session } = useSession()

	const userInitials = session?.user?.firstName[0] + session?.user?.lastName[0]

	return (
		<Dropdown
			placement="bottom-end"
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
					aria-label="User"
					disableRipple
				>
					<Skeleton
						isLoaded={!!session}
						className="flex rounded-full "
					>
						<Avatar
							src={session?.user?.image || '/'}
							name={userInitials}
							showFallback
							classNames={{
								base: 'bg-foreground text-background focus-within:bg-foreground flex items-center justify-center',
							}}
						/>
					</Skeleton>
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				className="p-3"
				closeOnSelect={false}
				aria-label="User button"
				variant="faded"
			>
				<DropdownSection
					aria-label="Profile & Actions"
					showDivider
				>
					<DropdownItem
						key="user"
						isReadOnly
						aria-label="User Information"
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
						key="theme"
						aria-label="Dark theme toggle"
						startContent={<FontAwesomeIcon icon={faMoon} />}
						endContent={<DarkModeSwitch />}
					>
						Dark Mode
					</DropdownItem>
				</DropdownSection>
				<DropdownSection>
					<DropdownItem
						key="logout"
						aria-label="Sign out of account"
						className="[&>*]:text-danger"
						color="danger"
						onClick={() => signOut()}
						startContent={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
					>
						Log Out
					</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</Dropdown>
	)
}

export default UserButton
