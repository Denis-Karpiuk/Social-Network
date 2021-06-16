import { profileAPI } from '../api/api'
import { setUserAuthPhoto } from './Auth-Reducer'

const SET_PROFILE_USER = 'SET_PROFILE_USER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

const initialState = {
	profile: null,
	isFetching: false,
	followingProgress: false,
	status: '',
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE_USER: {
			return {
				...state,
				profile: action.profile,
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.fetching,
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			}
		}
		case UPDATE_STATUS: {
			return {
				...state,
				status: action.status,
			}
		}
		default:
			return state
	}
}
export const setProfile = profile => {
	return {
		type: SET_PROFILE_USER,
		profile,
	}
}
const isFetching = fetching => {
	return {
		type: TOGGLE_IS_FETCHING,
		fetching,
	}
}

const setStatus = status => {
	return {
		type: SET_STATUS,
		status,
	}
}

const updateStatus = status => {
	return {
		type: UPDATE_STATUS,
		status,
	}
}

export const getProfile = userId => async dispatch => {
	dispatch(isFetching(true))
	let response = await profileAPI.getProfile(userId)
	dispatch(setProfile(response.data))
	dispatch(setUserAuthPhoto(response.data.photos, response.data.userId))
	dispatch(isFetching(false))
}

export const getStatus = userId => async dispatch => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}

export const updateStatusProfile = status => async dispatch => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(updateStatus(status))
	}
}

export const updateProfilePhoto = FormData => async dispatch => {
	const response = await profileAPI.updatePhoto(FormData)
	console.log(response.data)
}
export default profileReducer
