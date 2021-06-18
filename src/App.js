import { logDOM } from '@testing-library/react'
import React, { Suspense } from 'react'
import { connect, Provider } from 'react-redux'
import { Route } from 'react-router'
import { BrowserRouter, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Preloader from './components/Common/Preloader/Preloader'
import Friends from './components/Friends/Friends'
import Groups from './components/Groups/Groups'
import HeaderContainer from './components/Header/Header'
import Likes from './components/Likes/Likes'
import MessagesContainer from './components/Messages/Messages-Container'
import Music_Container from './components/Music/Music-Container'
import Navbar from './components/Navbar/Navbar'
import NewsContainer from './components/News/News-Container'
import NewUsersContainer from './components/NewUsers/NewUsersContainer'
import Notification from './components/Notification/Notification'
import PhotosContainer from './components/Photos/PhotosContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import Stars from './components/Stars/Stars'
import UsersContainer from './components/Users/UsersContainer'
import Video from './components/Video/Video'
import { initializeApp } from './redux/App-Reducer'
import store from './redux/redux-store'

const Login = React.lazy(() => import('./components/LogIn/LogIn'))

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
		const path = this.props.location.pathname
		let bodyStyle = 'bodyApp'
		let styleContent = 'content'
		if (path === '/login') {
			bodyStyle = 'loginBody'
			styleContent = 'loginContent'
		}

		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app'>
				<div>
					<Suspense fallback={<div>load...</div>}>
						<HeaderContainer />
						<div className={bodyStyle}>
							<div className='navbar'>
								<Navbar />
							</div>
							<div className={styleContent}>
								<div className='login'>
									<Route path='/login' render={() => <Login />} />
								</div>
								<Route
									path='/profile/:userId?'
									render={() => <ProfileContainer />}
								/>
								<Route path='/users' render={() => <UsersContainer />} />
								<Route path='/friends' render={() => <Friends />} />
								<Route path='/music' render={() => <Music_Container />} />
								<Route path='/news' render={() => <NewsContainer />} />
								<Route path='/messages' render={() => <MessagesContainer />} />
								<Route path='/photos' render={() => <PhotosContainer />} />
								<Route path='/video' render={() => <Video />} />
								<Route path='/notifications' render={() => <Notification />} />
								<Route path='/stars' render={() => <Stars />} />
								<Route path='/likes' render={() => <Likes />} />
								<Route path='/groups' render={() => <Groups />} />
								<Route path='/settings' render={() => <Settings />} />
							</div>
							<div className='last-users'>
								<NewUsersContainer />
							</div>
						</div>
					</Suspense>
				</div>
			</div>
		)
	}
}
const ContainerAPP = compose(
	connect(mapStateToProps, { initializeApp }),
	withRouter
)(App)

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
