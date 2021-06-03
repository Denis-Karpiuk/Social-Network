import messageReducer, { addMessage } from './messageReducer'

it('add messages', () => {
	let state = {
		messages: [
			{ id: 1, text: 'Hello' },
			{ id: 2, text: 'How are you ?' },
			{ id: 3, text: 'What do you do ?' },
		],
	}
	let action = addMessage('Hello')
	let result = messageReducer(state, action)
	expect(result.messages.length).toBe(4)
})
