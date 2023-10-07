'use client'

import { useSession } from 'next-auth/react'

import { NavbarContent, NavbarItem, Button, Link } from '@nextui-org/react'
import UserButton from '../user-button'

const MainNavActions = () => {
	const { data: session } = useSession()

	return (
		<NavbarContent justify="end">
			{session ? (
				<NavbarItem className="flex items-center">
					<UserButton />
				</NavbarItem>
			) : (
				<>
					<NavbarItem>
						<Link
							className="text-foreground"
							href="/auth/sign-in"
						>
							Login
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Button
							as={Link}
							color="primary"
							href="/auth/sign-up"
							variant="flat"
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
