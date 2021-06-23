import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import user from '../../assets/images/iconsApp/login.png'
import logo from '../../assets/images/iconsApp/logoHeader.png'
import message from '../../assets/images/iconsApp/mail.png'
import bell from '../../assets/images/iconsApp/notification.png'
import out from '../../assets/images/iconsApp/power-off.png'
import { withLoginPath } from '../../HOC/withLoginPath'
import { logout } from '../../redux/Auth-Reducer'
import { takeAutorizedLogin, takeIsAuthData } from '../../redux/Auth-Selectors'
import {
	takeIsProfilePhoto,
	takeIsUpdatePhoto,
	takeProfilePhoto,
} from '../../redux/Profile-Selectors'
import NavIcon from '../Common/NavIcon/NavIcon'
import s from './Header.module.css'
import SearchUser from './Search/Search'

const Header = ({
	isAuth,
	userAuthPhoto,
	login,
	logout,
	isUpdatePhoto,
	takeIsProfilePhoto,
}) => {
	const [userPhoto, setuUserAuthPhoto] = useState(userAuthPhoto)
	useEffect(() => {
		setuUserAuthPhoto(userAuthPhoto)
	}, [isUpdatePhoto, takeIsProfilePhoto])
	return (
		<div className={s.header}>
			<div className={s.network}>
				<div className={s.network__logotype}>
					<NavIcon img={logo} r={'50%'} />
				</div>
				<div className={s.network__name}>
					<p>React Network</p>
				</div>
			</div>
			<div className={s.search}>
				<SearchUser />
			</div>
			<div className={s.userAuth}>
				{isAuth ? (
					<div className={s.user}>
						<div className={s.user__avatar}>
							<NavIcon link={'profile'} img={userPhoto} r='50%' />
						</div>
						<div className={s.user__name}>{login}</div>
						<div className={s.user__notification}>
							<NavIcon link={'notifications'} img={bell} />
						</div>
						<div className={s.user__message}>
							<NavIcon link={'messages'} img={message} r={0} />
						</div>
						<div className={s.logoutButton} onClick={logout}>
							<NavIcon link={'login'} img={out} />
						</div>
					</div>
				) : (
					<div className={s.user__loguot}>
						<NavIcon link={'login'} img={user} r={'0'} />
					</div>
				)}
			</div>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		isAuth: takeIsAuthData(state),
		login: takeAutorizedLogin(state),
		userAuthPhoto: takeProfilePhoto(state),
		takeIsProfilePhoto: takeIsProfilePhoto(state),
		isUpdatePhoto: takeIsUpdatePhoto(state),
	}
}
const HeaderContainer = compose(
	withLoginPath,
	connect(mapStateToProps, { logout })
)(Header)
export default HeaderContainer
