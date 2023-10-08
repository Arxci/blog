import * as z from 'zod'

export const UserSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'This field has to be filled in.' })
		.email('This is not a valid email.'),
	firstName: z.string().min(1, { message: 'This field has to be filled in.' }),
	lastName: z.string().min(1, { message: 'This field has to be filled in.' }),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters' }),
})
