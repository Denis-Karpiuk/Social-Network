import { getUserLoginData } from './Auth-Reducer'

const INITIALIZED_SUCSESS = 'APP/INITIALIZED_SUCSESS'
const SET_REQUEST_ERROR = 'APP/SET_REQUEST_ERROR'

type InitialStateType = {
	initialized: boolean
	requestError: null | any
}

const initialState: InitialStateType = {
	initialized: false,
	requestError: null,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCSESS: {
			return {
				...state,
				initialized: true,
			}
		}
		case SET_REQUEST_ERROR: {
			return {
				...state,
				requestError: action.error,
			}
		}
		default:
			return state
	}
}

type InitializedSucsessActionType = {
	type: typeof INITIALIZED_SUCSESS
}
const initializedSucsess = (): InitializedSucsessActionType => {
	return {
		type: INITIALIZED_SUCSESS,
	}
}

type SetRequestErrorActionCreater = {
	type: typeof SET_REQUEST_ERROR
	error: any
}
export const setRequestError = (error: any): SetRequestErrorActionCreater => {
	return {
		type: SET_REQUEST_ERROR,
		error,
	}
}

export const initializeApp = () => async (dispatch: any) => {
	const promise = await dispatch(getUserLoginData())
	Promise.all([promise])
	dispatch(initializedSucsess())
}

export default appReducer
