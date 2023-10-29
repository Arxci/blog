import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import {
	getServerSession,
	SessionOptions,
	Session,
	User,
	CallbacksOptions,
	Profile,
	Account,
	PagesOptions,
} from 'next-auth'
import { NextResponse } from 'next/server'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider, { GithubProfile } from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import { Provider } from 'next-auth/providers/index'

import bcrypt from 'bcrypt'

import prismaDB from './prisma'
import { SignInSchema } from '@/schemas/zod'

export const isValidUser = async (): Promise<NextResponse> => {
	const session = await getServerSession(authOptions)

	// Validate that the session object exists
	if (!session) {
		return new NextResponse('User not authenticated.', {
			status: 401,
		})
	}

	// Fetch the logged in users data from the DB using the sessions userId
	const user = await prismaDB.user.findFirst({
		where: {
			id: session.user.id,
		},
	})

	// Validate that session user is valid
	if (!user) {
		return new NextResponse('User not authenticated.', {
			status: 401,
		})
	}

	return NextResponse.json(user)
}

export const assignRole = (email: string): string => {
	const adminEmails = ['garretthumbert9@gmail.com']

	return adminEmails.includes(email) ? 'admin' : 'user'
}

export const pages: Partial<PagesOptions> = {
	signIn: '/auth/sign-in',
	signOut: '/',
	error: '/auth/sign-in',
}

export const providers: Provider[] = [
	GoogleProvider({
		clientId: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		profile(profile: GoogleProfile): any {
			return {
				username: profile.name,
				email: profile.email,
				role: assignRole(profile.email),
				password: '',
				id: profile.sub,
			}
		},
	}),
	GithubProvider({
		clientId: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		profile(profile: GithubProfile): any {
			return {
				username: profile.name,
				email: profile.email,
				role: assignRole(profile.email),
				password: '',
				id: profile.id,
			}
		},
	}),
	CredentialsProvider({
		name: 'Credentials',

		credentials: {
			password: { label: 'Password', type: 'password' },
			email: { label: 'Email', type: 'email' },
		},
		async authorize(credentials) {
			// parse the data sent to the API with the zod schema
			try {
				await SignInSchema.parseAsync(credentials)
			} catch (err) {
				return { error: 'Please verify the information is correct.' } as any
			}

			// Check for an existing user in the DB
			const user = await prismaDB.user.findUnique({
				where: {
					email: credentials.email,
				},
				include: {
					accounts: true,
				},
			})

			if (!user) {
				return {
					error: 'Please verify the information and try again.',
				} as any
			}

			// Verify if the user is registered via OAuth
			if (user.accounts.length > 0) {
				return {
					error: `This email is already registered through ${user.accounts[0].provider}.`,
				} as any
			}

			// Decrypt the password and validate
			const isMatchingPassword = await bcrypt.compare(
				credentials.password,
				user.password
			)

			if (!isMatchingPassword) {
				return {
					error: 'Please verify the information and try again.',
				} as any
			}

			return user
		},
	}),
]

export const callbacks: Partial<CallbacksOptions<Profile, Account>> = {
	async signIn({ user }: { user: User }) {
		if (user?.error) {
			throw new Error(user?.error)
		}

		return true
	},
	async jwt({ token, user }: { token: JWT; user: User }) {
		if (user) {
			return {
				...token,
				id: user.id,
				username: user.username,
				role: user.role,
			}
		}

		return token
	},
	async session({ token, session }: { token: JWT; session: Session }) {
		return {
			...session,
			user: {
				...session.user,
				id: token.id,
				role: token.role,
				username: token.username,
			},
		}
	},
}

export const session: Partial<SessionOptions> = {
	strategy: 'jwt',
}
