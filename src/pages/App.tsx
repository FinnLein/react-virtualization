import { useRef, type RefObject } from 'react'
import { useUsers } from '../features/get-users/api/useUsers'
import Information from '../features/get-users/ui/Information'
import List from '../features/get-users/ui/List'

export default function App() {
	const { isPending, isFetchingNextPage } = useUsers()
	const scrollRef = useRef<HTMLElement>(null) as RefObject<HTMLElement>

	return (
		<main ref={scrollRef} className='h-screen mx-auto p-8 overflow-y-auto'>
			<section className='flex flex-col gap-8 items-center '>
				<h1 className=''>React virtualization</h1>
				{isPending ? (
					<div>Loading...</div>
				) : (
					<>
						<Information />
						<List scrollRef={scrollRef} />
						{isFetchingNextPage && <div>Loading...</div>}
					</>
				)}
			</section>
		</main>
	)
}
