import NextAuth, { Account, DefaultSession, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
	interface Session {
		accessToken?: Account.accessToken
		user: {
			id: string
			name: string
			email: string
			firstName: string
			lastName: string
			image: string
		}
	}

	interface User {
		firstName: string
		lastName: string
		error?: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken?: Account.accessToken
		id: string
		firstName: string
		lastName: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken?: Account.accessToken
		id: string
		firstName: string
		lastName: string
	}
}
