import React from 'react'
import s from './Navbar.module.css'
import NavItem from './NavItem/NavItem'
import profile from '../../assets/images/iconsApp/user1.png'
import news from '../../assets/images/iconsApp/global.png'
import gallery from '../../assets/images/iconsApp/photo-camera.png'
import music from '../../assets/images/iconsApp/music.png'
import users from '../../assets/images/iconsApp/people.png'
import groups from '../../assets/images/iconsApp/group.png'
import notification from '../../assets/images/iconsApp/notification.png'
import setting from '../../assets/images/iconsApp/settings.png'
import messages from '../../assets/images/iconsApp/messages.png'
import star from '../../assets/images/iconsApp/star.png'
import video from '../../assets/images/iconsApp/video-camera.png'
import likes from '../../assets/images/iconsApp/heart.png'
import friends from '../../assets/images/iconsApp/collaboration.png'
import { withRouter } from 'react-router-dom'

const Navbar = ({ location }) => {
	let navbarStyle = s.navbar
	location.pathname === '/login' && (navbarStyle = s.navbarLogin)
	return (
		<div className={navbarStyle}>
			<NavItem link={'profile'} name={'Profile'} img={profile} />
			<NavItem link={'users'} name={'Users'} img={users} />
			<NavItem link={'friends'} name={'Friends'} img={friends} />
			<NavItem link={'news'} name={'News'} img={news} />
			<NavItem link={'messages'} name={'Messages'} img={messages} />
			<NavItem link={'photos'} name={'Photos'} img={gallery} />
			<NavItem link={'music'} name={'Music'} img={music} />
			<NavItem link={'groups'} name={'Groups'} img={groups} />
			<NavItem link={'video'} name={'Video'} img={video} />
			<NavItem
				link={'notifications'}
				name={'Notifications'}
				img={notification}
			/>
			<NavItem link={'likes'} name={'Likes'} img={likes} />
			<NavItem link={'settings'} name={'Settings'} img={setting} />
		</div>
	)
}

export default withRouter(Navbar)
