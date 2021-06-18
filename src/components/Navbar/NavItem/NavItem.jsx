import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Icon from '../../Common/Icon/Icon'
import s from './NavItem.module.css'

const NavItem = ({ link, img, name, location }) => {
	return (
		<div className={s.item}>
			<NavLink to={`/${link}`} activeClassName={s.active}>
				<div className={s.item__icon}>
					<Icon img={img} r={0} />
				</div>
				{location.pathname === '/login' ? null : (
					<div className={s.item__name}>{name}</div>
				)}
			</NavLink>
		</div>
	)
}

export default withRouter(NavItem)
