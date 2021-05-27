import { getUserLoginData } from './Auth-Reducer'

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS'

const initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCSESS: {
			return {
				...state,
				initialized: true,
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

export const initializeApp = () => dispatch => {
	dispatch(getUserLoginData()).then(() => {
		dispatch(initializedSucsess())
	})
}

export default appReducer
