import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': 'ec75192c-c1ce-4429-bbe4-19d032b0aab1' },
})

export const userAPI = {
	getProfile(userId) {
		console.warn('Obsolete method. User profileApi')
		return profileAPI.getProfile(userId)
	},
	getUsers(pageNumber = 1, pageSize = 100) {
		return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
	},
	unfollowUser(userId) {
		return instance.delete('follow/' + userId)
	},
	followUser(userId) {
		return instance.post('follow/' + userId)
	},
	getFriends(pageNumber = 1, pageSize = 18) {
		return instance.get(
			`users?friend=${true}&page=${pageNumber}&count=${pageSize}`
		)
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
	updatePhoto(file) {
		let formData = new FormData()
		formData.append('image', file)
		return instance.put('profile/photo', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
}
