import { Divider } from '@nextui-org/divider'
import { DeleteAccount } from './components/delete-account'

export default function SettingsAccount() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Account</h3>
				<p className="text-sm text-muted-foreground">
					Update your account settings.
				</p>
			</div>
			<Divider />
			<DeleteAccount />
		</div>
	)
}
