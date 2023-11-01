import ProfileForm from '@/components/forms/profile-form'
import { Divider } from '@nextui-org/divider'

const Settings = async () => {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">
					This is how others will see you on the site.
				</p>
			</div>
			<Divider />
			<ProfileForm />
		</div>
	)
}

export default Settings
