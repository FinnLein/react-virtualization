import { useVirtualizer } from '@tanstack/react-virtual'
import { useEffect, type RefObject } from 'react'
import { useUsers } from '../api/useUsers'
import Card from './Card'

interface IListProps {
	scrollRef: RefObject<HTMLElement>
}

export default function List({ scrollRef }: IListProps) {
	const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useUsers()

	const users = data?.pages.flatMap(p => p.data) ?? []

	const virtualizer = useVirtualizer({
		count: users?.length ?? 0,
		estimateSize: () => 114 + 32,
		getScrollElement: () => scrollRef.current
	})

	const virtualItems = virtualizer.getVirtualItems()

	useEffect(() => {
		const lastItem = virtualItems[virtualItems.length - 1]
		if (
			!hasNextPage ||
			isFetchingNextPage ||
			!lastItem ||
			lastItem.index < users.length - 10
		)
			return
		fetchNextPage()
	}, [virtualItems, hasNextPage, isFetchingNextPage, fetchNextPage, users])

	return (
		<div
			className='relative'
			style={{ height: `${virtualizer.getTotalSize()}px` }}
		>
			{virtualItems.map(vItem => {
				const user = users?.[vItem.index]
				if (!user) return null
				return (
					<div
						className='absolute top-0 left-1/2'
						style={{
							transform: `translate(-50%, ${vItem.start}px)`,
							height: `${vItem.size}px`
						}}
						key={vItem.key}
						data-index={vItem.index}
					>
						<Card key={user.id} user={user} />
					</div>
				)
			})}
		</div>
	)
}
