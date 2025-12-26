import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsers } from './users.api'

export const useUsers = () => {
	const { data, isPending, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ['users'],
		queryFn: ({ pageParam = 1 }) => getUsers({ page: pageParam, limit: 50 }),
		staleTime: 1000 * 60 * 5,
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.meta.hasMore ? lastPage.meta.page + 1 : null
		}
	})

	return { data, isPending, isFetchingNextPage, hasNextPage, fetchNextPage }
}