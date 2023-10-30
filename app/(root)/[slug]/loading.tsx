import Skeleton from '@/components/skeletons/skeleton'
import PostHeadingLoading from './components/post-heading-loading'
import PostSectionLoading from './components/post-section-loading'

export default function Loading() {
	return (
		<section className=" w-full">
			<div className="container h-full flex flex-col gap-4 ">
				<Skeleton className="h-[300px] w-full sm:h-[450px] lg:rounded-b-xl" />
				<div className="px-4 md:px-6 w-full">
					<PostHeadingLoading />
					<article className=" prose prose-neutral lg:prose-xl dark:prose-invert ">
						<PostSectionLoading />
					</article>
				</div>
			</div>
		</section>
	)
}
