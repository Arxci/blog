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
	Skeleton,
	useDisclosure,
} from '@nextui-org/react'
import {
	faArrowRightFromBracket,
	faMoon,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DarkModeSwitch from './dark-mode-switch'
import AlertModal from './alert-modal'

const UserButton = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const { data: session } = useSession()

	const userInitials = session?.user?.firstName[0] + session?.user?.lastName[0]

	return (
		<>
			<AlertModal
				title="Sign out of your account"
				subtext="Are you sure you want to sign out?"
				onConfirm={() => signOut()}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
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
						aria-label="User"
						disableRipple
						isDisabled={!session}
					>
						<Skeleton
							isLoaded={!!session}
							className="flex rounded-full "
						>
							<Avatar
								name={userInitials}
								showFallback
								classNames={{
									base: 'bg-primary text-white font-bold flex items-center justify-center',
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
									className: 'bg-primary text-white',
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
							className="[&>*]:text-primary [&>*]:font-bold"
							color="primary"
							onClick={onOpen}
							closeOnSelect
							startContent={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
						>
							Log Out
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}

export default UserButton
