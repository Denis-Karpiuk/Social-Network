import React from 'react'
import s from './Navbar.module.css'
import NavItem from './NavItem/NavItem'
import profile from '../../assets/images/user1.png'
import news from '../../assets/images/global.png'
import gallery from '../../assets/images/photo-camera.png'
import music from '../../assets/images/music.png'
import users from '../../assets/images/people.png'
import groups from '../../assets/images/group.png'
import notification from '../../assets/images/notification.png'
import setting from '../../assets/images/settings.png'
import messages from '../../assets/images/messages.png'
import star from '../../assets/images/star.png'
import video from '../../assets/images/video-camera.png'
import likes from '../../assets/images/heart.png'

const Navbar = props => {
	return (
		<div className={s.navbar}>
			<NavItem link={'profile'} name={'Profile'} img={profile} />
			<NavItem link={'news'} name={'News'} img={news} />
			<NavItem link={'messages'} name={'Messages'} img={messages} />
			<NavItem link={'photos'} name={'Photos'} img={gallery} />
			<NavItem link={'music'} name={'Music'} img={music} />
			<NavItem link={'video'} name={'Video'} img={video} />
			<NavItem link={'users'} name={'Users'} img={users} />
			<NavItem link={'groups'} name={'Groups'} img={groups} />
			<NavItem
				link={'notifications'}
				name={'Notifications'}
				img={notification}
			/>
			<NavItem link={'stars'} name={'Stars'} img={star} />
			<NavItem link={'likes'} name={'Likes'} img={likes} />
			<NavItem link={'setting'} name={'Settings'} img={setting} />
		</div>
	)
}

export default Navbar
