import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunMiddleWare from 'redux-thunk'
import appReducer from './App-Reducer'
import authReducer from './Auth-Reducer'
import messageReduce from './messageReducer'
import musicReducer from './Music-Recucer'
import navbarReducer from './navbarReducer'
import newsReducer from './newsReducer'
import photoReducer from './photoReducer'
import profileReducer from './Profile-Reducer'
import usersReducer from './Users-Reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messageReduce,
	newsPage: newsReducer,
	photosPage: photoReducer,
	navbar: navbarReducer,
	usersPage: usersReducer,
	musicPage: musicReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunMiddleWare))

window.store = store

export default store
