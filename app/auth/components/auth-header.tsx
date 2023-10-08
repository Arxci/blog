const AuthHeader = ({
	heading,
	subtext,
}: {
	heading: string
	subtext: string
}) => {
	return (
		<div className="flex flex-col space-y-2 text-center">
			<h1 className="text-2xl font-semibold tracking-tight">{heading}</h1>
			<p className="text-sm text-muted-foreground">{subtext}</p>
		</div>
	)
}

export default AuthHeader
