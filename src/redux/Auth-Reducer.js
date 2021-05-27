import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA'
const TOOGLE_FETCHING = 'TOOGLE_FETCHING'

const initialState = {
	isAuth: false,
	login: null,
	userId: null,
	email: null,
	isFetching: false,
}
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_LOGIN_DATA: {
			return {
				...state,
				...action.payload,
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
const setUserLoginData = (userId, email, login, isAuth) => {
	return {
		type: SET_USER_LOGIN_DATA,
		payload: { userId, email, login, isAuth },
	}
}

export const getUserLoginData = () => dispatch => {
	return authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data
			dispatch(setUserLoginData(id, email, login, true))
		}
	})
}

export const login = (email, password, rememberMe) => {
	return dispatch => {
		dispatch(isFetching(true))
		authAPI.login(email, password, rememberMe).then(response => {
			dispatch(isFetching(false))
			if (response.data.resultCode === 0) {
				dispatch(getUserLoginData())
			} else {
				let message =
					response.data.messages.length > 0
						? response.data.messages[0]
						: 'some error'
				dispatch(stopSubmit('login', { _error: message }))
			}
		})
	}
}
export const logout = () => {
	return dispatch => {
		authAPI.logout().then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserLoginData(null, null, null, false))
			}
		})
	}
}
export default authReducer
