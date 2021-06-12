import React, { Suspense } from 'react'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Preloader from './components/Common/Preloader/Preloader'
import Friends from './components/Friends/Friends'
import FriendsOnlineContainer from './components/FriendsOnline/FriendsOnlineContainer'
import HeaderContainer from './components/Header/Header'
import Likes from './components/Likes/Likes'
import MessagesContainer from './components/Messages/Messages-Container'
import Music_Container from './components/Music/Music-Container'
import NavbarContainer from './components/Navbar/Navbar-Container'
import NewsContainer from './components/News/News-Container'
import PhotosContainer from './components/Photos/PhotosContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Recommend from './components/Recommend/Recommend'
import UsersContainer from './components/Users/UsersContainer'
import Video from './components/Video/Video'
import { initializeApp } from './redux/App-Reducer'
import store from './redux/redux-store'

const Login = React.lazy(() => import('./components/Header/LogIn/LogIn'))

const mapStateToProps = state => {
	return {
		initialized: state.app.initialized,
		isAuth: state.auth.isAuth, //? нефакт что будет нужна такая проверка
	}
}

//! МОРГАНИЕ ПРИ ЗАГРУЗКАХ, ПОЧЕМУ ПОПАДЮ НА СТРАНИЦУ ПРОФИЛЕ, ПОСЛЕ ВХОДА В ПРИЛОЖЕНИЕ, СДЕЛАТЬ РЕДИРЕКТ КОРРЕКТНЫМ

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='app'>
				<div>
					<Suspense fallback={<div>load...</div>}>
						<Route path='/login' render={() => <Login />} />
						<HeaderContainer />
						<div className='body'>
							<div className='navbar'>
								<NavbarContainer />
							</div>
							<div className='content'>
								<Route
									path='/profile/:userId?'
									render={() => <ProfileContainer />}
								/>
								<Route path='/music' render={() => <Music_Container />} />
								<Route path='/news' render={() => <NewsContainer />} />
								<Route path='/messages' render={() => <MessagesContainer />} />
								<Route path='/friends' render={() => <Friends />} />
								<Route path='/photos' render={() => <PhotosContainer />} />
								<Route path='/users' render={() => <UsersContainer />} />
								<Route path='/video' render={() => <Video />} />
								<Route path='/recommend' render={() => <Recommend />} />
								<Route path='/likes' render={() => <Likes />} />
							</div>
							<div className='friends-online'>
								<FriendsOnlineContainer />
							</div>
						</div>
					</Suspense>
				</div>
			</div>
		)
	}
}
const ContainerAPP = connect(mapStateToProps, { initializeApp })(App)

const MainApp = props => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<ContainerAPP />
			</Provider>
		</BrowserRouter>
	)
}
export default MainApp

// <React.StrictMode> //режим строгой проверки, помогает обнаруживать ошибки при разрабтке, не влияет на продакшен версию, рендерит компоненты по два раза.
// </React.StrictMode>
