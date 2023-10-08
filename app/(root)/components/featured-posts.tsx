import FeaturedPost from '@/components/ui/featured-post'

const FeaturedPosts = () => {
	return (
		<div className="py-6 flex-1">
			<h1 className="text-4xl font-bold  h-[60px]">Featured Posts</h1>
			<div className="flex flex-col gap-6 ">
				<FeaturedPost />
				<FeaturedPost />
				<FeaturedPost />
				<FeaturedPost />
			</div>
		</div>
	)
}

export default FeaturedPosts
