import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunMiddleWare from 'redux-thunk'
import appReducer from './App-Reducer'
import authReducer from './Auth-Reducer'
import messageReduce from './Messages-Reducer'
import photoReducer from './PhotoReducer'
import profileReducer from './Profile-Reducer'
import usersReducer from './Users-Reducer'

let reducers = combineReducers({
	app: appReducer,
	profilePage: profileReducer,
	messagesPage: messageReduce,
	photosPage: photoReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunMiddleWare))
)

export default store
