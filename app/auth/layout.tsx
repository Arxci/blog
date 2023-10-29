import Auth from './components/auth'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<main className=" min-h-screen ">
			<Auth />
			{children}
		</main>
	)
}
