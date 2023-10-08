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

const UserButton = () => {
	const { data: session } = useSession()

	const userInitials = session?.user?.firstName[0] + session?.user?.lastName[0]

	console.log(session)

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
				>
					<Avatar
						src={session?.user?.image || '/'}
						name={userInitials}
						fallback={
							!session ? (
								<Skeleton className="flex rounded-full w-12 h-12" />
							) : undefined
						}
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
				variant="faded"
			>
				<DropdownSection
					aria-label="Profile & Actions"
					showDivider
				>
					<DropdownItem
						key="user"
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
						key="theme"
						startContent={<FontAwesomeIcon icon={faMoon} />}
						endContent={<Switch color="primary" />}
					>
						<span>Dark Mode</span>
					</DropdownItem>
				</DropdownSection>
				<DropdownSection>
					<DropdownItem
						key="logout"
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
