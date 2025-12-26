import { axiosClassic } from '../../../shared/api/api'

export interface IUser {
	id: string
	name: string
	email: string
}

interface IPaginationResponse<T> {
	data: T[]
	meta: {
		totalItems: number
		totalPages: number
		page: number
		hasMore: boolean
	}
}

interface GetUsersParams {
	page: number
	limit: number
}

export async function getUsers(params: GetUsersParams): Promise<IPaginationResponse<IUser>> {
	const { data } = await axiosClassic.get<IPaginationResponse<IUser>>('/users', {
		params,
	})

	return data
}