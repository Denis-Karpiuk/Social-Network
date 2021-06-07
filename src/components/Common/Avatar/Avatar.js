import React from 'react'
import avatar from '../../../assets/images/avatar1.png'
import s from './Avatar.module.css'

const Avatar = ({ photo, width, height, r = '50%' }) => {
	const avatarStyle = {
		width: width,
		height: height,
		borderRadius: r,
	}
	return (
		<div className={s.avatar}>
			<img style={avatarStyle} src={!photo ? avatar : photo} />
		</div>
	)
}
export default Avatar
