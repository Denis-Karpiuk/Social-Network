import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUserLoginData, logout } from '../../redux/Auth-Reducer'
import s from './Header.module.css'
import Logotype from './Logotype/Logotype'
import Notyfication from './Notyfication/Notyfication'
import Player from './Player/Player'
import Search from './Search/Search'

class Header extends React.Component {
	componentDidMount() {
		this.props.getUserLoginData()
	}
	render() {
		return (
			<div className={s.header}>
				<Logotype />
				<Search />
				<Notyfication />
				<Player />
				<div className={s.loginBlock}>
					{this.props.auth.isAuth ? (
						<div className={s.userName}>
							{this.props.login}
							<button onClick={this.props.logout}>Log out</button>
						</div>
					) : (
						<NavLink to='/login'>LogIn</NavLink>
					)}
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => {
	return {
		auth: state.auth,
		login: state.auth.login,
	}
}
const HeaderContainer = connect(mapStateToProps, {
	getUserLoginData,
	logout,
})(Header)
export default HeaderContainer
