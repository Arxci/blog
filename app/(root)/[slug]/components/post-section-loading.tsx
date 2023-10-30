import Skeleton from '@/components/skeletons/skeleton'
import PostCodingLoading from './post-coding-loading'

const PostSectionLoading = () => {
	return (
		<div className="flex flex-col gap-2">
			<Skeleton className="w-full max-w-[400px] my-6 h-[30px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-[40%] h-[15px] rounded-full" />
			<PostCodingLoading />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-[40%] h-[15px] rounded-full" />
			<Skeleton className="w-full max-w-[400px] my-6 h-[30px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-[40%] h-[15px] rounded-full" />
			<Skeleton className="mt-6 w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-[40%] h-[15px] rounded-full" />
			<Skeleton className="w-full max-w-[400px] my-6 h-[30px] rounded-full" />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-[40%] h-[15px] rounded-full" />
			<PostCodingLoading />
			<Skeleton className="w-full h-[15px] rounded-full" />
			<Skeleton className="w-[40%] h-[15px] rounded-full" />
		</div>
	)
}

export default PostSectionLoading
