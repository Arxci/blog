import CheckboxSelect from './checkbox-filters'
import TagSelect from './tag-filters'

const PostFilters = ({
	searchParams,
}: {
	searchParams: { tag: string; mostRecent: string; isFeatured: string }
}) => {
	return (
		<div className="flex gap-6 flex-col md:flex-row">
			<TagSelect searchParams={searchParams} />
			<CheckboxSelect searchParams={searchParams} />
		</div>
	)
}

export default PostFilters
