import { ProfileType, PostType, PhotosType } from './Types/types'
import { stopSubmit } from 'redux-form'
import { profileAPI } from '../api/api'
import { setRequestError } from './App-Reducer'
import { getUsers } from './Users-Reducer'

const SET_PROFILE_USER = 'PROFILE/SET_PROFILE_USER'
const TOGGLE_IS_FETCHING = 'PROFILE/TOGGLE_IS_FETCHING'
const SET_STATUS = 'PROFILE/SET_STATUS'
const UPDATE_STATUS = 'PROFILE/UPDATE_STATUS'
const ADD_POSTS = 'PROFILE/PROFILE/ADD_POSTS'
const UPDATE_PHOTOS = 'PROFILE/PROFILE/UPDATE_PHOTOS'
const TOGGLE_EDIT_MODE = 'PROFILE/TOGGLE_EDIT_MODE'

const initialState = {
	profile: null as ProfileType | null,
	isFetching: false,
	followingProgress: false,
	status: null as string | null,
	isUpdatePhoto: [],
	isEditMode: false,
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
	] as Array<PostType>,
}
export type InitialStateType = typeof initialState

const profileReducer = (
	state = initialState,
	action: any
): InitialStateType => {
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
				profile: { ...state.profile, photos: action.photos } as ProfileType,
				isUpdatePhoto: [...state.isUpdatePhoto],
			}
		}
		case TOGGLE_EDIT_MODE: {
			return {
				...state,
				isEditMode: action.currentMode,
			}
		}
		default:
			return state
	}
}

type SetProfileActionCreaterType = {
	type: typeof SET_PROFILE_USER
	profile: any
}
export const setProfile = (
	profile: ProfileType
): SetProfileActionCreaterType => {
	return {
		type: SET_PROFILE_USER,
		profile,
	}
}

type IsFetchingActionCreateType = {
	type: typeof TOGGLE_IS_FETCHING
	fetching: boolean
}
const isFetching = (fetching: boolean): IsFetchingActionCreateType => {
	return {
		type: TOGGLE_IS_FETCHING,
		fetching,
	}
}

type SetStatusActionCreatorType = {
	type: typeof SET_STATUS
	status: string
}
const setStatus = (status: string): SetStatusActionCreatorType => {
	return {
		type: SET_STATUS,
		status,
	}
}

type UpdateStatusActionCreatorType = {
	type: typeof UPDATE_STATUS
	status: string
}
const updateStatus = (status: string): UpdateStatusActionCreatorType => {
	return {
		type: UPDATE_STATUS,
		status,
	}
}

type AddPostProfileActionCreatorType = {
	type: typeof ADD_POSTS
	post: string
}
export const addPostProfile = (
	post: string
): AddPostProfileActionCreatorType => {
	return {
		type: ADD_POSTS,
		post,
	}
}

type UpdatePhotoActionCreatorType = {
	type: typeof UPDATE_PHOTOS
	photos: PhotosType
}
const updatePhoto = (photos: PhotosType): UpdatePhotoActionCreatorType => {
	return {
		type: UPDATE_PHOTOS,
		photos,
	}
}

type ToogleEditModeActionCreatorType = {
	type: typeof TOGGLE_EDIT_MODE
	currentMode: boolean
}
export const toogleEditMode = (
	currentMode: boolean
): ToogleEditModeActionCreatorType => {
	return {
		type: TOGGLE_EDIT_MODE,
		currentMode,
	}
}

export const getProfile = (userId: number) => async (dispatch: any) => {
	dispatch(isFetching(true))
	let response = await profileAPI.getProfile(userId)
	dispatch(setProfile(response.data))
	dispatch(getUsers(1, '', 10))
	dispatch(isFetching(false))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data))
}

export const updateStatusProfile = (status: string) => async (
	dispatch: any
) => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(updateStatus(status))
	}
}

export const updateProfilePhoto = (file: any) => async (dispatch: any) => {
	try {
		dispatch(isFetching(true))
		const response = await profileAPI.updatePhoto(file)
		dispatch(isFetching(false))
		if (response.data.resultCode === 0) {
			dispatch(updatePhoto(response.data.data.photos))
		}
	} catch (error) {
		let id = await dispatch(showReqestError(error.message))
		dispatch(isFetching(false))
	}
}
export const updateProfile = (profile: any) => async (
	dispatch: any,
	getState: any
) => {
	const userId = getState().auth.userId
	dispatch(isFetching(true))
	const response = await profileAPI.updateProfile(profile)
	dispatch(isFetching(false))
	if (response.data.resultCode === 0) {
		dispatch(getProfile(userId))
	} else {
		let message =
			response.data.messages.length > 0
				? response.data.messages[0]
				: 'some error'
		dispatch(stopSubmit('AboutForm', { _error: message }))
		return Promise.reject(response.data.messages[0])
	}
}

const showReqestError = (error: any) => async (dispatch: any) => {
	dispatch(setRequestError(error))
	setTimeout(() => dispatch(setRequestError(null)), 3000)
}
export default profileReducer
