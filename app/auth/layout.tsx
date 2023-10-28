import AuthProvider from './components/auth-provider'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className=" min-h-screen ">
			<AuthProvider>{children}</AuthProvider>
		</main>
	)
}
