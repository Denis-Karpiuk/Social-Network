import { getUserLoginData } from './Auth-Reducer'
import { getUsers } from './Users-Reducer'

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

export const initializeApp = () => async dispatch => {
	await dispatch(getUserLoginData())
	await dispatch(getUsers(1, 10))
	dispatch(initializedSucsess())
}

export default appReducer
