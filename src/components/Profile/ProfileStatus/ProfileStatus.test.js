import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'
//* Объединяем разные тесты одного компонента в один тест с помощью describe
describe('ProfileStatus', () => {
	//! Проверяем локольный state классового компонента
	test('status from props should be set to state of component', () => {
		//* Создаём виртуальную версию компонента с помощью create из билиотеки react-test-render
		const component = create(<ProfileStatus status='This is test' />)
		//* Берём у созданного компонента объект(так как это классовый компонент)
		const instance = component.getInstance()
		//* Проверяем нужное свойство у взятого объекта на соответсвие
		expect(instance.state.status).toBe('This is test')
	})

	//! Проверяем локальный state классового комопнента
	test('state.editMode should be false default', () => {
		const component = create(<ProfileStatus status='This is test' />)
		const instance = component.getInstance()
		expect(instance.state.editMode).toBe(false)
	})

	//! Проверяем наличие <span> после рендера компонента
	test('after render <span> must be show', () => {
		const component = create(<ProfileStatus status='This is test' />)
		//* Берём у созданного компонента корневой элемент
		const root = component.root
		//* Ищем в корневом элементе подходящий тэг
		const span = root.findByType('span')
		//* Проверяем что найденый тэг не должен быть равен Null
		expect(span).not.toBeNull()
	})

	//! Проверяем значение <span> на соответсвие корректному значению
	test('after render <span> current must be correct ', () => {
		const component = create(<ProfileStatus status='This is test' />)
		const root = component.root
		let span = root.findByType('span')
		//* Обращаемся к первому дочернему свойству
		expect(span.children[0]).toBe('This is test')
	})

	//! Проверяем что не должно быть элемента на странице
	test('after render <input> wont to show', () => {
		const component = create(<ProfileStatus status='This is test' />)
		const root = component.root
		//* В проверке, ищем тэг в корневом элементе и расчитывем  получить ошибку, ловим её через toThrow
		expect(() => {
			const input = root.findByType('input')
		}).toThrow()
	})

	//! Нажимаем на кнопки, проверяем реакцию после кликов
	test('after click on span it change to input and input value correct ', () => {
		const component = create(<ProfileStatus status='This is test' />)
		const root = component.root
		let span = root.findByType('span')
		//* Кликаем по span, так как это происходит в реакт, то к обработчику который назначен у span можно обратиться через props
		span.props.onDoubleClick()
		let input = root.findByType('input')
		//* Проверяем значение. Обращаемся к значению input, которое аналогично span доступно через props
		expect(input.props.value).toBe('This is test')
	})

	//! Проверяем вызов callback, который передан в компонент
	test('calls callbakc function afer deactivedModde', () => {
		//* Создаём фейковый callback, который передадим в компонент, что бы компонент её вызвал и мы тогда от неё узнаем что она вызвана.
		const mockCallback = jest.fn()
		//* Создаём виртульный компонент
		const component = create(
			//* Передаём в виртульный компонент анониную пустую функцию, название должно быть таким же как у реаьлного callback, нам важно проверить факты вызова этой функции при определённых условиях
			<ProfileStatus status='This is test' updateStatus={mockCallback} />
		)
		//* Берём у созданного компонента объект(так как это классовый компонент)
		const instance = component.getInstance()
		//* Вызваем метод объекта,который есть у компонент, результат работы которого, предпологате вызов callback который мы ему передали.
		instance.deActiveEditMode()
		//* Проверяем у фейкового callback свойство, которое говорит сколько раз его вызвали
		expect(mockCallback.mock.calls.length).toBe(1)
	})
})
