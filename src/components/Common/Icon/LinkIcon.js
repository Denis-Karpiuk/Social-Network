import React from 'react'
import icon from '../../../assets/images/export.png'
import s from './LinkIcon.module.css'
import profilePhoto from '../../../assets/images/user1.png'
import telegram from '../../../assets/images/telegram.png'
import github from '../../../assets/images/github.png'
import instagram from '../../../assets/images/instagram.png'
import linkedin from '../../../assets/images/linkedin.png'
import background from '../../../assets/images/profile-bg.jpg'
import youtube from '../../../assets/images/youtube1.png'
import twitter from '../../../assets/images/twitter.png'
import facebook from '../../../assets/images/facebook.png'
import vk from '../../../assets/images/vk.png'

let icons = {
	github,
	instagram,
	linkedin,
	youtube,
	twitter,
	facebook,
	vk,
	telegram,
}
const LinkIcon = ({ img, link }) => {
	return (
		<div className={s.licon}>
			<a
				className={s.links}
				href={link.includes('http') ? link : `https://${link}`}
			>
				<img src={!img ? icon : !icons[img] ? icon : icons[img]} />
			</a>
		</div>
	)
}
export default LinkIcon
