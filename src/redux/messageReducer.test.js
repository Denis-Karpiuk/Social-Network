import messageReducer, { addMessage } from './messageReducer'

let state = {
	messages: [
		{ id: 1, text: 'Hello' },
		{ id: 2, text: 'How are you ?' },
		{ id: 3, text: 'What do you do ?' },
	],
}
let action = addMessage('Hello')

it('last message should be correct', () => {
	let result = messageReducer(state, action)
	expect(result.messages.length).toBe(4)
})

it('messages should be add', () => {
	let result = messageReducer(state, action)
	expect(result.messages[3].text).toBe('Hello')
})
