import React from 'react'
import avatar from '../../../assets/images/avatar1.png'
import s from './Avatar.module.css'

const Avatar = ({ photo, r = '50%' }) => {
	let style = {
		borderRadius: r,
	}
	return (
		<div className={s.avatar}>
			<img style={style} src={!photo ? avatar : photo} />
		</div>
	)
}
export default Avatar
