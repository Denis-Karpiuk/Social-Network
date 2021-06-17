import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/iconsApp/logoHeader.png'
import message from '../../assets/images/iconsApp/mail.png'
import bell from '../../assets/images/iconsApp/notification.png'
import out from '../../assets/images/iconsApp/power-off.png'
import user from '../../assets/images/iconsApp/user3.png'
import { logout } from '../../redux/Auth-Reducer'
import {
	takeAuthUserPhoto,
	takeAutorizedLogin,
	takeIsAuthData,
} from '../../redux/Auth-Selectors'
import Icon from '../Common/Icon/Icon'
import s from './Header.module.css'
import Search from './Search/Search'

class Header extends React.Component {
	render() {
		let { isAuth, userAuthPhoto, login, logout } = this.props
		return (
			<div className={s.header}>
				<div className={s.network}>
					<div className={s.network__logotype}>
						<Icon img={logo} r={'50%'} />
					</div>
					<div className={s.network__name}>
						<p>React Network</p>
					</div>
				</div>
				<div className={s.search}>
					<Search />
				</div>
				<div className={s.userAuth}>
					{isAuth ? (
						<div className={s.user}>
							<div className={s.user__avatar}>
								<Icon img={!userAuthPhoto || userAuthPhoto.large} r='50%' />
							</div>
							<div className={s.user__name}>{login}</div>
							<div className={s.user__notification}>
								<Icon img={bell} />
							</div>
							<div className={s.user__message}>
								<Icon img={message} r={0} />
							</div>
							<div className={s.logoutButton} onClick={logout}>
								<Icon img={out} />
							</div>
						</div>
					) : (
						<div className={s.user__loguot}>
							<NavLink to='/login'>
								<Icon img={user} r={'0'} />
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
		isAuth: takeIsAuthData(state),
		login: takeAutorizedLogin(state),
		userAuthPhoto: takeAuthUserPhoto(state),
	}
}
const HeaderContainer = connect(mapStateToProps, { logout })(Header)
export default HeaderContainer
