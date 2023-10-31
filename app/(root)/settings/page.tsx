import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

import ProfileForm from '@/components/forms/profile-form'
import { Divider } from '@nextui-org/divider'

const Settings = async () => {
	const session = await getServerSession(authOptions)

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">
					This is how others will see you on the site.
				</p>
			</div>
			<Divider />
			<ProfileForm session={session} />
		</div>
	)
}

export default Settings
