import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	async function middleware(req) {
		const token = await getToken({ req })
		const isAuthenticated = !!token

		if (!req.nextUrl.pathname.startsWith('/auth') && !isAuthenticated) {
			return NextResponse.redirect(new URL('/auth/sign-in', req.url))
		}

		if (req.nextUrl.pathname.startsWith('/auth') && isAuthenticated) {
			return NextResponse.redirect(new URL('/', req.url))
		}
	},
	{
		callbacks: {
			authorized: () => true,
		},
	}
)

export const config = {
	matcher: ['/settings', '/settings/account', '/auth/sign-in', '/auth/sign-up'],
}
