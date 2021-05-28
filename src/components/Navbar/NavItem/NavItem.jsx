import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavItem.module.css'

const NavItem = props => {
	return (
		<div className={s.item}>
			<NavLink to={props.link} activeClassName={s.active}>
				<div>
					<img src={props.img} />
				</div>
				<div>{props.name}</div>
			</NavLink>
		</div>
	)
}

export default NavItem
