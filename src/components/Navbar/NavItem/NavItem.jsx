import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../../Common/Icon/Icon'
import s from './NavItem.module.css'

const NavItem = ({ link, img, name }) => {
	return (
		<div className={s.item}>
			{true ? (
				<NavLink to={`/${link}/`} activeClassName={s.active}>
					<div className={s.icon}>
						<Icon photo={img} r={0} />
					</div>
					<div>{name}</div>
				</NavLink>
			) : (
				<NavLink to={`/${link}/`} activeClassName={s.active}>
					<div className={s.icon}>
						<Icon photo={img} r={0} />
					</div>
				</NavLink>
			)}
		</div>
	)
}

export default NavItem
