import React from 'react'
import icon from '../../../assets/images/iconsApp/export.png'
import facebook from '../../../assets/images/iconsApp/facebook.png'
import github from '../../../assets/images/iconsApp/github.png'
import instagram from '../../../assets/images/iconsApp/instagram.png'
import linkedin from '../../../assets/images/iconsApp/linkedin.png'
import telegram from '../../../assets/images/iconsApp/telegram.png'
import twitter from '../../../assets/images/iconsApp/twitter.png'
import profilePhoto from '../../../assets/images/iconsApp/user1.png'
import vk from '../../../assets/images/iconsApp/vk.png'
import youtube from '../../../assets/images/iconsApp/youtube1.png'
import s from './LinkIcon.module.css'

let icons = {
	github,
	instagram,
	linkedin,
	youtube,
	twitter,
	facebook,
	vk,
	telegram,
	profilePhoto,
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
