import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': 'c956d4ff-5bca-4a92-be9b-c764ae068f1c' },
})

export const getUsers = (pageNumber = 1, pageSize = 100) => {
	return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
}

export const getFollow = userId => {
	return instance.post(`follow/${userId}`)
}

export const getUnFollow = userId => {
	return instance.delete(`follow/${userId}`)
}
