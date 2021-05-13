import { userAPI } from '../api/api'
const SET_USERS = 'SET_USERS'

const initialState = {
	pageName: 'VideoPage',
	users: [],
}

const videoUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS: {
			return {
				...state,
				users: [...action.users],
			}
		}
		default:
			return state
	}
}

const setVideoUsers = users => {
	return {
		type: SET_USERS,
		users,
	}
}

export const getUsersVideoPage = (numberPage, count) => {
	return dispatch => {
		userAPI.getUsers(numberPage, count).then(response => {
			dispatch(setVideoUsers(response.data.items))
		})
	}
}

export default videoUsersReducer
