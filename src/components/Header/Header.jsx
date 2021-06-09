import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import photo from '../../assets/images/React App_files/pas.jpg'
import { logout } from '../../redux/Auth-Reducer'
import Avatar from '../Common/Avatar/Avatar'
import s from './Header.module.css'
import Notyfication from './Notyfication/Notyfication'
import Search from './Search/Search'
import login from '../../assets/images/login.png'
import out from '../../assets/images/logout.png'
import message from '../../assets/images/email.png'
import bell from '../../assets/images/bell.png'
import logo from '../../assets/images/logoReact.png'

class Header extends React.Component {
	render() {
		return (
			<div className={s.header}>
				<div className={s.network}>
					<div className={s.network__logotype}>
						<Avatar photo={logo} />
					</div>
					<div className={s.network__name}>
						<p>React Network</p>
					</div>
				</div>
				<div className={s.search}>
					<Search />
				</div>
				<div className={s.notification}>
					<div className={s.bell}>
						<Avatar photo={bell} />
					</div>
					<div className={s.message}>
						<Avatar photo={message} />
					</div>
				</div>
				<div className={s.user}>
					{this.props.auth.isAuth ? (
						<div className={s.user__login}>
							<div className={s.login__avatar}>
								<Avatar photo={photo} />
							</div>
							<div className={s.login__info}>
								<div className={s.login__name}>{this.props.login}</div>
								<div onClick={this.props.logout} className={s.logoutButton}>
									<Avatar photo={out} />
								</div>
							</div>
						</div>
					) : (
						<div className={s.user__loguot}>
							<NavLink to='/login'>
								<Avatar photo={login} r={'0'} />
							</NavLink>
						</div>
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
		// userAvatar: tekeUserAvatar(state)
	}
}
const HeaderContainer = connect(mapStateToProps, { logout })(Header)
export default HeaderContainer
