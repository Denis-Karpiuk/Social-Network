import { profileAPI } from '../api/api'

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

export const getProfile = userId => {
	return dispatch => {
		dispatch(isFetching(true))
		profileAPI.getProfile(userId).then(response => {
			dispatch(isFetching(false))
			dispatch(setProfile(response.data))
		})
	}
}

export const getStatus = userId => {
	return dispatch => {
		profileAPI.getStatus(userId).then(response => {
			dispatch(setStatus(response.data))
		})
	}
}

export const updateStatusProfile = status => {
	return dispatch => {
		profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(updateStatus(status))
			}
		})
	}
}

export const updateProfilePhoto = FormData => async dispatch => {
	const response = await profileAPI.updatePhoto(FormData)
	console.log(response.data)
}
export default profileReducer
