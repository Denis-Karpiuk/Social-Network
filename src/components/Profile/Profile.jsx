import React from 'react'
import Icon from '../Common/Icon/Icon'
import Preloader from '../Common/Preloader/Preloader'
import s from './Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const Profile = props => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.profilePage}>
			<div className={s.user}>
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
			</div>
		</div>
	)
}
export default Profile
