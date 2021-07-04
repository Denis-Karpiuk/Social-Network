const ADDMESSAGE = 'MESSAGES/ADDMESSAGE'
type DialogsType = {
	id: number
	name: string
}

type MessagesType = {
	id: number
	text: string
}
let initialState = {
	dialogs: [
		{ id: 1, name: 'Denis' },
		{ id: 2, name: 'Katy' },
		{ id: 3, name: 'Ivan' },
	] as Array<DialogsType>,
	messages: [
		{ id: 1, text: 'Hello' },
		{ id: 2, text: 'How are you ?' },
		{ id: 3, text: 'What do you do ?' },
	] as Array<MessagesType>,
}
type InitialStateType = typeof initialState

const messageReducer = (
	state = initialState,
	action: any
): InitialStateType => {
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

type AddMesageActionCreaterType = {
	type: typeof ADDMESSAGE
	message: string
}
export const addMessage = (message: string): AddMesageActionCreaterType => {
	return {
		type: ADDMESSAGE,
		message,
	}
}
export default messageReducer
