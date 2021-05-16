const ADDMESSAGE = 'ADDMESSAGE'

let initialState = {
	dialogs: [
		{ id: 1, name: 'Denis' },
		{ id: 2, name: 'Katy' },
		{ id: 3, name: 'Ivan' },
	],
	messages: [
		{ id: 1, text: 'Hello' },
		{ id: 2, text: 'How are you ?' },
		{ id: 3, text: 'What do you do ?' },
	],
}

const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDMESSAGE: {
			return {
				...state,
				messages: [
					...state.messages,
					{ id: state.messages.length + 1, text: action.message },
				],
			}
		}
		default:
			return state
	}
}

export const addMessage = message => {
	return {
		type: ADDMESSAGE,
		message,
	}
}
export default messageReducer
