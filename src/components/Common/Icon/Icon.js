import React from 'react'
import icon from '../../../assets/images/user.png'
import s from './Icon.module.css'

const Icon = ({ img, r = 0 }) => {
	let style = {
		borderRadius: r,
	}
	return (
		<div className={s.icon}>
			<img style={style} src={!img ? icon : img} />
		</div>
	)
}
export default Icon
