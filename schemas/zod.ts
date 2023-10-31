import * as z from 'zod'

export const RegisterSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' })
		.email('This is not a valid email.'),
	username: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' }),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters.' }),
})

export const SignInSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' })
		.email('This is not a valid email.'),
	password: z
		.string()
		.min(5, { message: 'Please enter at least 5 characters.' }),
})

export const CommentPostSchema = z.object({
	postId: z.string(),
	message: z
		.string()
		.min(5, { message: 'Please enter at least 1 character.' })
		.max(50, { message: 'Please enter no more than 50 characters.' }),
})

export const UserUpdateSchema = z.object({
	username: z
		.string()
		.min(1, { message: 'Please enter at least 1 character.' }),
})

export const CommentDeleteSchema = z.object({
	id: z.string(),
})
