import React from 'react'
import userPhoto from '../../assets/images/user.png'
import Preloader from '../Common/Preloader/Preloader'
import s from './Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const Profile = props => {
	if (!props.profilePage.profile) {
		return <Preloader />
	}
	return (
		<div className={s.profilePage}>
			<div className={s.user}>
				<div className={s.avatar}>
					<img
						src={
							!props.profilePage.profile.photos.small
								? userPhoto
								: props.profilePage.profile.photos.small
						}
					/>
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
				<div className={s.userName}>{props.profilePage.profile.fullName}</div>
				<div className={s.status}></div>
				<div className={s.userId}>
					<div>Id пользователя:</div>
					<div>{props.profilePage.profile.userId}</div>
				</div>
				<div className={s.about}>
					<ProfileStatus
						status={props.profilePage.status}
						updateStatus={props.updateStatusProfile}
					/>
				</div>
				<div className={s.country}>
					<div>Страна проживания:</div>
					<div>{props.profilePage.country}</div>
				</div>
			</div>
			<div className={s.photos}>
				<h2>Здесь в будущем будут отображены фотографии поьзователей</h2>
			</div>
		</div>
	)
}
export default Profile
