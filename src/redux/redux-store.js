import { applyMiddleware, combineReducers, createStore } from "redux";
import thunMiddleWare from 'redux-thunk';
import authReducer from "./Auth-Reducer";
import messageReduce from './messageReducer';
import musicReducer from "./Music-Recucer";
import navbarReducer from './navbarReducer';
import newsReducer from "./newsReducer";
import photoReducer from "./photoReducer";
import profileReducer from "./Profile-Reducer";
import usersReducer from "./Users-Reducer";
import testReducer from "./Test-Reducer";
import videoUsersReducer from "./Video-Reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReduce,
    newsPage: newsReducer,
    photosPage: photoReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    musicPage: musicReducer,
    auth: authReducer,
    videoPage: videoUsersReducer,
    testPage: testReducer


});

let store = createStore(reducers, applyMiddleware(thunMiddleWare));

window.store = store;

export default store;

