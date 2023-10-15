import AuthorAboutLoading from './components/author-about-loading'
import AuthorHeadingLoading from './components/author-heading-loading'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4">
				<AuthorHeadingLoading />
				<AuthorAboutLoading />
			</div>
		</section>
	)
}
