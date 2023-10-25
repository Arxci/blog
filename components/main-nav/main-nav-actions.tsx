'use client'

import { Session } from 'next-auth'
import Link from 'next/link'

import { NavbarContent, NavbarItem, Button } from '@nextui-org/react'

import DarkModeButton from '../ui/dark-mode-button'
import SignOutButton from '../ui/sign-out-button'

interface MainNavActionsProps {
	session: Session
}

const MainNavActions: React.FC<MainNavActionsProps> = ({ session }) => {
	return (
		<NavbarContent justify="end">
			<NavbarItem className="hidden sm:block">
				<DarkModeButton />
			</NavbarItem>
			{session ? (
				<NavbarItem className="flex items-center">
					<SignOutButton />
				</NavbarItem>
			) : (
				<>
					<NavbarItem className="block sm:hidden">
						<Button
							as={Link}
							color="primary"
							radius="full"
							href="/auth/sign-in"
							variant="shadow"
						>
							Sign In
						</Button>
					</NavbarItem>
					<NavbarItem className="hidden sm:block">
						<Link
							className="text-foreground "
							href="/auth/sign-in"
						>
							Sign in
						</Link>
					</NavbarItem>
					<NavbarItem className="hidden sm:block">
						<Button
							as={Link}
							color="primary"
							radius="full"
							href="/auth/sign-up"
							variant="shadow"
						>
							Sign Up
						</Button>
					</NavbarItem>
				</>
			)}
		</NavbarContent>
	)
}

export default MainNavActions
