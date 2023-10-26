import * as z from 'zod'

export const UserSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' })
		.email('This is not a valid email.'),
	firstName: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' }),
	lastName: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' }),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters.' }),
})

export const CommentSchema = z.object({
	author: z.string().min(1, { message: 'Please enter at least 1 character.' }),
	authorId: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' }),
	postId: z.number(),
	message: z.string().min(5, { message: 'Please enter at least 1 character.' }),
})
