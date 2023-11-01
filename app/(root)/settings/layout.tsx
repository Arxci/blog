import { Metadata } from 'next'

import { Divider } from '@nextui-org/divider'
import SidebarNav from './components/sidebar-nav'

export const metadata: Metadata = {
	title: 'Forms',
	description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
	{
		title: 'Profile',
		href: '/settings/profile',
	},
	{
		title: 'Account',
		href: '/settings/account',
	},
]

export default function SettingsLayout({ children }) {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4">
				<div className="space-y-6 pt-10 px-4 md:px-6 pb-16 ">
					<div className="space-y-0.5">
						<h2 className="text-2xl font-bold tracking-tight">Settings</h2>
						<p className="text-muted-foreground">
							Manage your account settings.
						</p>
					</div>
					<Divider className="my-6" />
					<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
						<aside className="lg:w-1/5">
							<SidebarNav items={sidebarNavItems} />
						</aside>
						<div className="flex-1 ">{children}</div>
					</div>
				</div>
			</div>
		</section>
	)
}
