import React from 'react'
import { Route } from 'react-router'
import './App.css'
import Comments from './components/Comments/Comments'
import Friends from './components/Friends/Friends'
import HeaderContainer from './components/Header/Header'
import LoginContainer from './components/Header/LogIn/LogIn'
import Likes from './components/Likes/Likes'
import MessagesContainer from './components/Messages/Messages-Container'
import Music_Container from './components/Music/Music-Container'
import NavbarContainer from './components/Navbar/Navbar-Container'
import NavbarRight from './components/NavbarRight/NavbarRight'
import NewsContainer from './components/News/News-Container'
import PhotosContainer from './components/Photos/PhotosContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Recommend from './components/Recommend/Recommend'
import UsersContainer from './components/Users/UsersContainer'
import VideoContainer from './components/VideoUsers/VideoContainer'

const App = () => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<div className='body'>
				<NavbarContainer />
				<div className='content'>
					<Route path='/login' render={() => <LoginContainer />} />
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/music' render={() => <Music_Container />} />
					<Route path='/news' render={() => <NewsContainer />} />
					<Route path='/messages' render={() => <MessagesContainer />} />
					<Route path='/friends' render={() => <Friends />} />
					<Route path='/photos' render={() => <PhotosContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/video' render={() => <VideoContainer />} />
					<Route path='/recommend' render={() => <Recommend />} />
					<Route path='/likes' render={() => <Likes />} />
					<Route path='/comments' render={() => <Comments />} />
				</div>
				<NavbarRight />
			</div>
		</div>
	)
}
export default App
