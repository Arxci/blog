import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prismaDB from '@/lib/prisma'
import { callbacks, pages, providers, session } from '@/lib/auth'

export const authOptions: NextAuthOptions = {
	pages: pages,
	providers: providers,
	callbacks: callbacks,
	session: session,
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prismaDB),
}

const handler = NextAuth(authOptions as any)

export { handler as GET, handler as POST }
