import React from 'react'
import s from './Navbar.module.css'
import NavItem from './NavItem/NavItem'

const Navbar = props => {
	let navItem = props.navbarBlock.map(nav => (
		<NavItem key={nav.id} name={nav.name} link={nav.link} img={nav.img} />
	))
	return (
		<div className={s.navbar}>
			<div>{navItem}</div>
		</div>
	)
}

export default Navbar
