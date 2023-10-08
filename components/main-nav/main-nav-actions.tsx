'use client'

import { Session } from 'next-auth'
import Link from 'next/link'

import { NavbarContent, NavbarItem, Button } from '@nextui-org/react'
import UserButton from '../user-button'

interface MainNavActionsProps {
	session: Session
}

const MainNavActions: React.FC<MainNavActionsProps> = ({ session }) => {
	return (
		<NavbarContent justify="end">
			{session ? (
				<NavbarItem className="flex items-center">
					<UserButton />
				</NavbarItem>
			) : (
				<>
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
