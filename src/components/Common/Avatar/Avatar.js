import React from 'react'
import avatar from '../../../assets/images/avatar1.png'
import s from './Avatar.module.css'

const Avatar = ({ style }) => {
	debugger
	return (
		<div className={s.headerAvatar}>
			<img src={avatar} />
		</div>
	)
}

export default Avatar
