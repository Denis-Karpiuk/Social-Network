import React from 'react'
import Icon from '../Common/Icon/Icon'
import Preloader from '../Common/Preloader/Preloader'
import s from './Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import background from '../../assets/images/profile-bg.jpg'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import telegram from '../../assets/images/telegram.png'
import youtube from '../../assets/images/youtube.png'
import gmail from '../../assets/images/gmail.png'
import github from '../../assets/images/github.png'
import profilePhoto from '../../assets/images/avatar1.png'
import NavItem from '../Navbar/NavItem/NavItem'

const Profile = props => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.profilePage}>
			{/* <div className={s.user}>
				<div className={s.avatar}>
					<Icon />
				</div>

				<div className={s.buttons}>
					<div>
						<button>Send Message</button>
					</div>
					<div>
						<button>Call</button>
					</div>
				</div>
			</div>
			<div className={s.info}>
				<div className={s.userName}>{props.profileName}</div>
				<div className={s.status}>
					<ProfileStatus
						status={props.status}
						updateStatus={props.updateStatusProfile}
					/>
				</div>
				<div className={s.userId}>
					<div>Id пользователя:</div>
					<div>{props.profileId}</div>
				</div>
				<div className={s.about}></div>
				<div className={s.country}>
					<div>Страна проживания:</div>
					<div>{props.profileCountry}</div>
				</div>
			</div>
			<div className={s.photos}>
				<h2>Здесь в будущем будут отображены фотографии поьзователей</h2>
			</div> */}

			<div className={s.profile}>
				<div className={s.profile__header}>
					<div className={s.header__img}>
						<img src={background} />
					</div>
					<div className={s.header__footer}>
						<div className={s.footer__links}>
							<div className={s.footer__links__item}>
								<Icon photo={instagram} r={0} />
							</div>
							<div className={s.footer__links__item}>
								<Icon photo={linkedin} r={0} />
							</div>
							<div className={s.footer__links__item}>
								<Icon photo={telegram} r={0} />
							</div>
							<div className={s.footer__links__item}>
								<Icon photo={youtube} r={0} />
							</div>
							<div className={s.footer__links__item}>
								<Icon photo={gmail} r={0} />
							</div>
							<div className={s.footer__links__item}>
								<Icon photo={github} r={0} />
							</div>
						</div>
						<div className={s.profile__info}>
							<div className={s.profile__avatar}>
								<Icon photo={profilePhoto} />
							</div>
							<div className={s.profile__name}>Denis Karpiuk</div>
						</div>
						<div className={s.footer__statistic}>
							<div className={s.statistic__posts}>
								<div className={s.name}>Posts</div>
								<div className={s.count}>100</div>
							</div>
							<div className={s.statistic__followers}>
								<div className={s.name}>Followers</div>
								<div className={s.count}>100</div>
							</div>
							<div className={s.statistic__following}>
								<div className={s.name}>Following</div>
								<div className={s.count}>100</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.posts}>Posts</div>
			</div>
		</div>
	)
}
export default Profile
