import React from 'react'
import icon from '../../../assets/images/avatar1.png'
import s from './Icon.module.css'

const Icon = ({ photo, r = '50%' }) => {
	let style = {
		borderRadius: r,
	}
	return (
		<div className={s.icon}>
			<img style={style} src={!photo ? icon : photo} />
		</div>
	)
}
export default Icon
