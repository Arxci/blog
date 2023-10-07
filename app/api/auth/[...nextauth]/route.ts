import NextAuth from 'next-auth/next'
import { JWT } from 'next-auth/jwt'
import { NextAuthOptions, Session, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'
import prismaDB from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
				email: { label: 'Email', type: 'email' },
			},
			async authorize(credentials) {
				if (!credentials) {
					return null
				}
				if (!credentials.password || !credentials.email) {
					return null
				}
				const user = await prismaDB.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user) {
					return null
				}

				const isMatchingPassword = bcrypt.compare(
					credentials.password,
					user.password
				)

				if (!isMatchingPassword) {
					return null
				}
				return user
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }: { token: JWT; user: User }) {
			if (user) {
				return {
					...token,
					id: user.id,
				}
			}

			return token
		},
		async session({ token, session }: { token: JWT; session: Session }) {
			return { ...session, user: { ...session.user, id: token.id } }
		},
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prismaDB),
}

const handler = NextAuth(authOptions as any)

export { handler as GET, handler as POST }
