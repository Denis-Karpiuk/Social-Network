import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../../assets/images/iconsApp/user4.png'
import s from './NavIcon.module.css'

type NavIconType = {
	img: string | null
	link: string
	r: string
}

const NavIcon = ({ img, link, r = '0' }: NavIconType) => {
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
