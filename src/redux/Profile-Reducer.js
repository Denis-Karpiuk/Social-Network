import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
import { profileAPI } from '../api/api'
import { setUserAuthPhoto } from './Auth-Reducer'

const SET_PROFILE_USER = 'SET_PROFILE_USER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const ADD_POSTS = 'PROFILE/ADD_POSTS'
const UPDATE_PHOTOS = 'PROFILE/UPDATE_PHOTOS'

const initialState = {
	profile: null,
	isFetching: false,
	followingProgress: false,
	status: '',
	isUpdatePhoto: [],
	myPosts: [
		{
			id: 1,
			text: 'Hello World!!! ',
			likes: 100,
		},
		{
			id: 2,
			text: 'I like this Life!!! ',
			likes: 200,
		},
		{
			id: 3,
			text: 'Never give up!!! ',
			likes: 10,
		},
	],
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
		case ADD_POSTS: {
			let post = {
				id: state.myPosts.length + 1,
				text: action.post,
				likes: 0,
			}
			return {
				...state,
				myPosts: [...state.myPosts, post],
			}
		}
		case UPDATE_PHOTOS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
				isUpdatePhoto: [...state.isUpdatePhoto],
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

export const addPostProfile = post => {
	return {
		type: ADD_POSTS,
		post,
	}
}

const updatePhoto = photos => {
	return {
		type: UPDATE_PHOTOS,
		photos,
	}
}
export const getProfile = userId => async dispatch => {
	dispatch(isFetching(true))
	let response = await profileAPI.getProfile(userId)
	dispatch(setProfile(response.data))
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

export const updateProfilePhoto = file => async dispatch => {
	dispatch(isFetching(true))
	const response = await profileAPI.updatePhoto(file)
	dispatch(isFetching(false))
	if (response.data.resultCode === 0) {
		dispatch(updatePhoto(response.data.data.photos))
	}
}
export default profileReducer
