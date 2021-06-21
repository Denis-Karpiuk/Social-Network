import React from 'react'
import icon from '../../../assets/images/iconsApp/user4.png'
import s from './Icon.module.css'

const Icon = ({ img, r = 0 }) => {
	let style = {
		borderRadius: r,
	}
	return (
		<div className={s.img}>
			<img style={style} src={!img ? icon : img} />
		</div>
	)
}
export default Icon
