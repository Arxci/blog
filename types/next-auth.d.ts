import NextAuth, { Account, DefaultSession, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
	interface Session {
		accessToken?: Account.accessToken
		user: {
			id: string
			username: string
			email: string
		}
	}

	interface User {
		username: string
		error?: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken?: Account.accessToken
		id: string
		username: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken?: Account.accessToken
		id: string
		username: string
	}
}
