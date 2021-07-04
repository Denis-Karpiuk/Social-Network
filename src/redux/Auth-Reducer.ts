import { Nullable } from './Types/types'
import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'
import { getProfile } from './Profile-Reducer'

const SET_USER_LOGIN_DATA = 'AUTH/SET_USER_LOGIN_DATA'
const TOOGLE_FETCHING = 'AUTH/TOOGLE_FETCHING'
const SET_CAPTCHA_URL = 'AUTH/SET_CAPTCHA_URL'

const initialState = {
	isAuth: false,
	login: null as string | null,
	userId: null as number | null,
	email: null as string | null,
	isFetching: false,
	captchaURL: null as string | null,
}
type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_USER_LOGIN_DATA: {
			return {
				...state,
				...action.payload,
				userIDD: 'numbers', //! ждём пока упадёт ошибка- должна была упасть, но пока почемуто не падает.
			}
		}
		case TOOGLE_FETCHING: {
			return {
				...state,
				isFetching: action.fetching,
			}
		}
		case SET_CAPTCHA_URL: {
			return {
				...state,
				captchaURL: action.captchaURL,
			}
		}
		default:
			return state
	}
}

type IsFetchingActionCreater = {
	type: typeof TOOGLE_FETCHING
	fetching: boolean
}
const isFetching = (fetching: boolean): IsFetchingActionCreater => {
	return {
		type: TOOGLE_FETCHING,
		fetching,
	}
}
type PayLoadType = {
	userId: Nullable<number>
	email: Nullable<string>
	login: Nullable<string>
	isAuth: boolean
}
type SetUserLoginDataActionCreater = {
	type: typeof SET_USER_LOGIN_DATA
	payload: PayLoadType
}
const setUserLoginData = (
	userId: Nullable<number>,
	email: Nullable<string>,
	login: Nullable<string>,
	isAuth: boolean
): SetUserLoginDataActionCreater => {
	return {
		type: SET_USER_LOGIN_DATA,
		payload: { userId, email, login, isAuth },
	}
}
type SetCaptchaURLType = {
	type: typeof SET_CAPTCHA_URL
	captchaURL: null | string
}
const setCaptchaURL = (captchaURL: string): SetCaptchaURLType => {
	return {
		type: SET_CAPTCHA_URL,
		captchaURL,
	}
}
export const getUserLoginData = () => async (dispatch: any) => {
	dispatch(isFetching(true))
	const response = await authAPI.me()
	dispatch(isFetching(false))
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data
		dispatch(setUserLoginData(id, email, login, true))
		dispatch(getProfile(id))
	}
}

export const login = (
	email: string,
	password: number,
	rememberMe: boolean,
	captcha: any
) => async (dispatch: any) => {
	const response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(getUserLoginData())
	} else {
		if (response.data.resultCode == 10) {
			dispatch(getCaptchaURL())
		}
		let message =
			response.data.messages.length > 0
				? response.data.messages[0]
				: 'some error'
		dispatch(stopSubmit('login', { _error: message }))
	}
}

export const logout = () => async (dispatch: any) => {
	const response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setUserLoginData(null, null, null, false))
	}
}

export const getCaptchaURL = () => async (dispatch: any) => {
	const response = await securityAPI.getCaptchaURL()
	dispatch(setCaptchaURL(response.data.url))
}

export default authReducer
