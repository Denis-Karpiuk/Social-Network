import messageReducer, { addMessage } from './messageReducer'
//! Тестируем фунцкию Reducer
//* Создаём начальный state для reducer
let state = {
	messages: [
		{ id: 1, text: 'Hello' },
		{ id: 2, text: 'How are you ?' },
		{ id: 3, text: 'What do you do ?' },
	],
}
//* Вызваем AC для reducer и передаём в него данные
let action = addMessage('Hello World')
//* Создаём тест, который проверяет корректность
it('messages should be add', () => {
	//* Получаем результат работы функции, вызвав её с переданными в неё параметрами
	let result = messageReducer(state, action)
	//* Проверяем результат на соотвтествие ожиданиям
	expect(result.messages.length).toBe(4)
})
//* Проверяем что сообщение было добавлено
it('message text shoul be correct', () => {
	//* Резульатат вызова функции
	let result = messageReducer(state, action)
	//* Проверяем результат
	expect(result.messages[3].text).toBe('Hello World')
})
