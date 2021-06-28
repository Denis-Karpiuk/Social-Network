import { getUserLoginData } from './Auth-Reducer'

const INITIALIZED_SUCSESS = 'APP/INITIALIZED_SUCSESS'
const SET_REQUEST_ERROR = 'APP/SET_REQUEST_ERROR'

const initialState = {
	initialized: false,
	requestError: null,
}

const appReducer = (state = initialState, action) => {
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

const initializedSucsess = () => {
	return {
		type: INITIALIZED_SUCSESS,
	}
}
export const setRequestError = error => {
	return {
		type: SET_REQUEST_ERROR,
		error,
	}
}

export const initializeApp = () => async dispatch => {
	await dispatch(getUserLoginData())
	dispatch(initializedSucsess())
}

export default appReducer
