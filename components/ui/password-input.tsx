import { useState } from 'react'

import { Input } from '@nextui-org/react'
import { UseFormReturn } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface PasswordInputProps {
	loading: boolean
	form: UseFormReturn<
		{
			email?: string
			firstName?: string
			lastName?: string
			password?: string
		},
		any,
		undefined
	>
}

const PasswordInput: React.FC<PasswordInputProps> = ({ loading, form }) => {
	const [showPassword, setShowPassword] = useState(false)

	const disableVisibilityHandle = () => {
		setShowPassword(false)
	}

	const enableVisibilityHandle = () => {
		setShowPassword(true)
	}

	return (
		<Input
			{...form.register('password')}
			isRequired
			isDisabled={loading}
			type={showPassword ? 'text' : 'password'}
			label="Password"
			placeholder="Enter your password."
			endContent={
				showPassword ? (
					<FontAwesomeIcon
						className="cursor-pointer w-4 h-4"
						icon={faEye}
						onClick={disableVisibilityHandle}
					/>
				) : (
					<FontAwesomeIcon
						className="cursor-pointer w-4 h-4"
						icon={faEyeSlash}
						onClick={enableVisibilityHandle}
					/>
				)
			}
			errorMessage={
				form.formState.errors.password
					? form.formState.errors.password.message
					: undefined
			}
		/>
	)
}

export default PasswordInput
