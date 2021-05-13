import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': 'c956d4ff-5bca-4a92-be9b-c764ae068f1c' },
})

export const userAPI = {
	getProfile(userId) {
		console.warn('Obsolete method. User profileApi')
		return profileAPI.getProfile(userId)
	},
	getUsers(pageNumber = 1, pageSize = 10) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
	},
	unfollowUser(userId) {
		return instance.delete('follow/' + userId)
	},
	followUser(userId) {
		return instance.post('follow/' + userId)
	},
}

export const authAPI = {
	me() {
		return instance.get('auth/me')
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get('profile/' + userId)
	},
	getStatus(userId) {
		return instance.get('profile/status/' + userId)
	},
	updateStatus(status) {
		return instance.put('profile/status', { status: status })
	},
}
