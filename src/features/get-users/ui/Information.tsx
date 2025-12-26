import { useUsers } from '../api/useUsers'

export default function Information() {
	const { data } = useUsers()

	const meta = data?.pages.flatMap(m => m.meta).at(0)

	return (
		<div className="flex gap-4 [&>:not(:last-child)]:after:content-['|'] [&>:not(:last-child)]:after:ml-4">
			<div>Total items: {meta?.totalItems || 0}</div>
			<div>Total pages: {meta?.totalPages || 0}</div>
		</div>
	)
}
