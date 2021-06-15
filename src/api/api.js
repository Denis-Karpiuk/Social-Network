import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': 'c956d4ff-5bca-4a92-be9b-c764ae068f1c' },
	put: { 'CONTENT-TYPE': 'multipart/form-data' },
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
	getFriends() {
		return instance.get(`users?friend=${true}&count=${100}`)
	},
}

export const authAPI = {
	me() {
		return instance.get('auth/me')
	},
	login(email, password, rememberMe) {
		return instance.post('auth/login', { email, password, rememberMe })
	},
	logout() {
		return instance.post('auth/logout')
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
		return instance.put('profile/status', { status })
	},
	updatePhoto(formData) {
		return instance.put('profile/photo', formData)
	},
}
