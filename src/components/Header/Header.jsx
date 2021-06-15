import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import message from '../../assets/images/mail.png'
import login from '../../assets/images/user3.png'
import logo from '../../assets/images/logoHeader.png'
import out from '../../assets/images/power-off.png'
import bell from '../../assets/images/notification.png'
import { logout } from '../../redux/Auth-Reducer'
import { takeProfilePhoto } from '../../redux/Profile-Selectors'
import Icon from '../Common/Icon/Icon'
import s from './Header.module.css'
import Search from './Search/Search'
import NavItem from '../Navbar/NavItem/NavItem'
class Header extends React.Component {
	render() {
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
					{this.props.auth.isAuth ? (
						<div className={s.user}>
							<div className={s.user__avatar}>
								<Icon img={this.props.userIcon} />
							</div>
							<div className={s.user__name}>{this.props.login}</div>
							<div className={s.user__notification}>
								<Icon img={bell} />
							</div>
							<div className={s.user__message}>
								<Icon img={message} r={0} />
							</div>
							<div className={s.logoutButton} onClick={this.props.logout}>
								<Icon img={out} />
							</div>
						</div>
					) : (
						<div className={s.user__loguot}>
							<NavLink to='/login'>
								<Icon img={login} r={'0'} />
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
		userIcon: takeProfilePhoto(state),
	}
}
const HeaderContainer = connect(mapStateToProps, { logout })(Header)
export default HeaderContainer
