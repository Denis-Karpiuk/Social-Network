import { authAPI, userAPI } from '../api/api'

const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const LOGOUT_USER = 'LOGOUT_USER'
const TOOGLE_FETCHING = 'TOOGLE_FETCHING'

const initialState = {
	isAuth: false,
	login: null,
	userId: null,
	email: null,
	profile: null,
	isFetching: false,
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_LOGIN_DATA: {
			return {
				...state,
				...action.userData,
				isAuth: true,
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
				isAuth: true,
				userId: action.profile.userId,
				login: action.profile.fullName,
			}
		}
		case LOGOUT_USER: {
			return {
				...state,
				isAuth: false,
			}
		}
		case TOOGLE_FETCHING: {
			return {
				...state,
				isFetching: action.fetching,
			}
		}
		default:
			return state
	}
}

const isFetching = fetching => {
	return {
		type: TOOGLE_FETCHING,
		fetching,
	}
}
const setUserLoginData = (userId, email, login) => {
	return {
		type: SET_USER_LOGIN_DATA,
		userData: { userId, email, login },
	}
}
const setUserProfile = profile => {
	return {
		type: SET_USER_PROFILE,
		profile,
	}
}
const logOutUser = () => {
	return {
		type: LOGOUT_USER,
	}
}
export const getUserLoginData = () => {
	return dispatch => {
		authAPI.me().then(response => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data
				dispatch(setUserLoginData(id, email, login))
				userAPI.getProfile(id).then(response => {
					dispatch(setUserProfile(response.data))
				})
			}
		})
	}
}
export const loginUser = loginData => {
	return dispatch => {
		dispatch(isFetching(true))
		authAPI.login(loginData).then(response => {
			if (response.data.resultCode === 0) {
				userAPI.getProfile(response.data.data.userId).then(response => {
					dispatch(setUserProfile(response.data))
					dispatch(isFetching(false))
				})
			}
		})
	}
}

export const logoutUser = () => {
	return dispatch => {
		authAPI.logout().then(response => {
			if (response.data.resultCode === 0) {
				dispatch(logOutUser())
			}
		})
	}
}

export default authReducer
