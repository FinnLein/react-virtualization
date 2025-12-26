import axios from 'axios'

export const axiosClassic = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

