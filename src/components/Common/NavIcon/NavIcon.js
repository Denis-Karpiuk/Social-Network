import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../../assets/images/iconsApp/user4.png'
import s from './NavIcon.module.css'

const NavIcon = ({ img, link = 'profile', r = 0 }) => {
	let style = {
		borderRadius: r,
	}
	return (
		<div className={s.img}>
			<NavLink to={`/${link}`} activeClassName={s.active}>
				<img style={style} src={!img ? icon : img} />
			</NavLink>
		</div>
	)
}
export default NavIcon
