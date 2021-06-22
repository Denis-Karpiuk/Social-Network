import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'
import { getProfile } from './Profile-Reducer'
import { getUsers } from './Users-Reducer'

const SET_USER_LOGIN_DATA = 'AUTH/SET_USER_LOGIN_DATA'
const TOOGLE_FETCHING = 'AUTH/TOOGLE_FETCHING'
const SET_USER_AUTH_PHOTO = 'AUTH/SET_USER_AUTH_PHOTO'

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

export const getUserLoginData = () => async dispatch => {
	dispatch(isFetching(true))
	const response = await authAPI.me()
	dispatch(isFetching(false))
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setUserLoginData(id, email, login, true))
		dispatch(getProfile(id))
	}
}

export const login = (email, password, rememberMe) => async dispatch => {
	const response = await authAPI.login(email, password, rememberMe)
	if (response.data.resultCode === 0) {
		dispatch(getUserLoginData())
	} else {
		let message =
			response.data.messages.length > 0
				? response.data.messages[0]
				: 'some error'
		dispatch(stopSubmit('login', { _error: message }))
	}
}

export const logout = () => async dispatch => {
	const response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setUserLoginData(null, null, null, false))
	}
}

export default authReducer
