import type { IUser } from '../api/users.api'

export default function Card({ user }: { user: IUser }) {
	return (
		<li className='flex bg-white text-black justify-between border-2 border-white p-8 w-3xl rounded-3xl'>
			<div>
				<h2 className="text-2xl font-bold">{user.name}</h2>
				<div className="text-gray-500">
					<p>Email: {user.email}</p>
				</div>
			</div>
			<p className="text-gray-500">ID: {user.id}</p>
		</li>
	)
}
