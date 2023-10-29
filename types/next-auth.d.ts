import NextAuth, { DefaultSession, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			username: string
			email: string
			role: string
		}
	}

	interface User {
		username: string
		role: string
		error?: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		id: string
		username: string
		role: string
	}
}
