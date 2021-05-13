import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/redux-store'
import reportWebVitals from './reportWebVitals'

export let reRenderTree = () => {
	ReactDOM.render(
		// <React.StrictMode> //режим строгой проверки, помогает обнаруживать ошибки при разрабтке, не влияет на продакшен версию, рендерит компоненты по два раза.
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		// </React.StrictMode>,
		document.getElementById('root')
	)
}

reRenderTree() // ВЫЗЫВАЕМ ФУНКЦИЮ ДЛЯ ПЕРВОЙ ОТРИСОВКИ СТРАНИЦЫ

//ЗАБИРАЕМ ФУНКЦИЮ В STATE.JS ИЗБЕГАЯ ПРИ ЭТОМ ЦИКЛИРОВАНИЯ
//reRenderTree ЭТО НАШ ПОДПИСЧИК, МЫ ПОДПИСЫВАЕМ НА НАШИ ОНОВЛЕНИЯ
store.subscribe(() => {
	reRenderTree()
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
