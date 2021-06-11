import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import bell from '../../assets/images/bell.png'
import message from '../../assets/images/email.png'
import login from '../../assets/images/login.png'
import logo from '../../assets/images/logoHeader.png'
import out from '../../assets/images/logout.png'
import photo from '../../assets/images/React App_files/pas.jpg'
import { logout } from '../../redux/Auth-Reducer'
import Icon from '../Common/Icon/Icon'
import s from './Header.module.css'
import Search from './Search/Search'

class Header extends React.Component {
	render() {
		return (
			<div className={s.header}>
				<div className={s.network}>
					<div className={s.network__logotype}>
						<Icon photo={logo} />
					</div>
					<div className={s.network__name}>
						<p>React Network</p>
					</div>
				</div>
				<div className={s.search}>
					<Search />
				</div>
				<div className={s.user}>
					{this.props.auth.isAuth ? (
						<div className={s.user__login}>
							<div className={s.login__Icon}>
								<Icon photo={photo} />
							</div>
							<div className={s.login__info}>
								<div className={s.login__name}>{this.props.login}</div>
								<div className={s.login__notifycation}>
									<Icon photo={bell} />
								</div>
								<div className={s.login__message}>
									<Icon photo={message} />
								</div>
								<div className={s.logoutButton} onClick={this.props.logout}>
									<Icon photo={out} />
								</div>
							</div>
						</div>
					) : (
						<div className={s.user__loguot}>
							<NavLink to='/login'>
								<Icon photo={login} r={'0'} />
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
		// userIcon: tekeUserIcon(state)
	}
}
const HeaderContainer = connect(mapStateToProps, { logout })(Header)
export default HeaderContainer
