import { ButtonHTMLAttributes, KeyboardEvent, useState } from 'react'

import { Input, InputProps } from '@nextui-org/react'
import { UseFormReturn } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface PasswordInputProps {
	loading: boolean
	form: UseFormReturn<{
		password?: string
	}>
	inputProps?: InputProps
}

const PasswordInput: React.FC<PasswordInputProps> = ({
	loading,
	form,
	inputProps,
}) => {
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
			{...inputProps}
			isRequired
			isDisabled={loading}
			type={showPassword ? 'text' : 'password'}
			label="Password"
			placeholder="Enter your password."
			endContent={
				<button
					aria-label="Toggle visibility"
					type="button"
					onKeyDown={(e: KeyboardEvent<HTMLButtonElement>) => {
						if (e.key === 'Enter') {
							showPassword ? disableVisibilityHandle : enableVisibilityHandle
						}
					}}
					onClick={
						showPassword ? disableVisibilityHandle : enableVisibilityHandle
					}
				>
					<FontAwesomeIcon
						className="cursor-pointer w-4 h-4"
						icon={showPassword ? faEye : faEyeSlash}
					/>
				</button>
			}
			isInvalid={form.formState.errors.password !== undefined}
			errorMessage={
				form.formState.errors.password
					? form.formState.errors.password.message
					: undefined
			}
		/>
	)
}

export default PasswordInput
