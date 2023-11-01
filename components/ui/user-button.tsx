'use client'

import { useState } from 'react'

import { signOut, useSession } from 'next-auth/react'

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem,
	Avatar,
	Skeleton,
	User,
	useDisclosure,
} from '@nextui-org/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRightFromBracket,
	faGear,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { toast } from 'sonner'

import AlertModal from './alert-modal'
import Link from 'next/link'

const UserButton = () => {
	const [loading, setLoading] = useState(false)
	const { data: session } = useSession()
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const signOutHandle = async () => {
		setLoading(true)
		try {
			await signOut()
		} catch (error) {
			toast.error('Sorry, failed to sign out.', {
				description: 'Please try again later.',
			})
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<AlertModal
				loading={loading}
				title="Sign out of your account"
				subtext="Are you sure you want to sign out?"
				onConfirm={signOutHandle}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
			<Dropdown
				placement="bottom-end"
				radius="sm"
				classNames={{
					base: 'p-0 border-small border-divider bg-background',
					arrow: 'bg-default-200',
				}}
			>
				<DropdownTrigger>
					<Skeleton
						isLoaded={!!session}
						className="rounded-full"
					>
						<Avatar
							name={session?.user?.username[0].toUpperCase()}
							isBordered
							as="button"
							showFallback
							className="transition-transform"
							classNames={{
								base: 'bg-primary w-9 h-9 text-lg text-white flex items-center justify-center',
							}}
						/>
					</Skeleton>
				</DropdownTrigger>
				<DropdownMenu
					className="p-3"
					shouldFocusWrap
					autoFocus="first"
					variant="flat"
					aria-label="Profile Actions"
				>
					<DropdownItem
						isReadOnly
						key="user"
						className="h-14 gap-2 opacity-100 cursor-default"
					>
						{session && (
							<User
								name={session?.user?.username}
								description={session.user.email}
								classNames={{
									name: 'text-default-600',
									description: 'text-default-500',
								}}
								avatarProps={{
									size: 'sm',
									name: session.user.username[0].toUpperCase(),
									className: 'transition-transform',
									classNames: {
										base: 'bg-primary  text-lg text-white flex items-center justify-center',
									},
								}}
							/>
						)}
					</DropdownItem>
					<DropdownSection
						title="Manage"
						aria-label="Manage Account"
						showDivider
					>
						<DropdownItem
							closeOnSelect={true}
							key="profile"
							color="default"
							as={Link}
							href="/settings/profile"
							classNames={{
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
							startContent={
								<FontAwesomeIcon
									className="text-xl w-4 h-4 text-default-500 pointer-events-none flex-shrink-0"
									icon={faUser}
								/>
							}
						>
							Profile
						</DropdownItem>
						<DropdownItem
							closeOnSelect={true}
							key="account"
							color="default"
							as={Link}
							href="/settings/account"
							classNames={{
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
							startContent={
								<FontAwesomeIcon
									className="text-xl w-4 h-4 text-default-500 pointer-events-none flex-shrink-0"
									icon={faGear}
								/>
							}
						>
							Settings
						</DropdownItem>
					</DropdownSection>
					<DropdownItem
						key="logout"
						className="text-danger"
						color="danger"
						closeOnSelect={false}
						onClick={onOpen}
						startContent={
							<FontAwesomeIcon
								className="text-xl w-4 h-4  pointer-events-none flex-shrink-0 text-danger"
								icon={faArrowRightFromBracket}
							/>
						}
					>
						Sign Out
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}

export default UserButton
