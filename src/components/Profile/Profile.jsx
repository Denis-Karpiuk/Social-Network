import React from 'react'
import { NavLink } from 'react-router-dom'
import background from '../../assets/images/BackgroundsHeaders/profileBg.jpg'
import Icon from '../Common/Icon/Icon'
import LinkIcon from '../Common/LinkIcon/LinkIcon'
import Preloader from '../Common/Preloader/Preloader'
import TittleItem from '../Common/TittleItem/TittleItem'
import Friend from './Friend/Friend'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const Profile = ({
	updateStatusProfile,
	status,
	profileName,
	friends,
	profile,
	profilePhoto,
	contacts,
	posts,
	addPostProfile,
	reset,
}) => {
	if (!profile) {
		return <Preloader />
	}

	return (
		<div className={s.profile}>
			<div className={s.profile__header}>
				<div className={s.header__background}>
					<img src={background} />
				</div>
				<div className={s.header__footer}>
					<div className={s.footer__contacts}>
						{Object.keys(contacts).map((key, index) =>
							contacts[key] ? (
								<div key={key} className={s.link__item}>
									<LinkIcon img={key} link={contacts[key]} />
								</div>
							) : null
						)}
					</div>
					<div className={s.profile__avatar}>
						<Icon img={profilePhoto} r='50%' />
					</div>
					<div className={s.profile__info}>
						<div className={s.profile__name}>{profileName}</div>
						<div className={s.profile__status}>
							<ProfileStatus
								status={status}
								updateStatus={updateStatusProfile}
							/>
						</div>
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
			<div className={s.profile__posts}>
				<MyPosts
					reset={reset}
					addPostProfile={addPostProfile}
					profilePhoto={profilePhoto}
					posts={posts}
				/>
			</div>
			<div className={s.friends}>
				<TittleItem tittle={'Friends'} subtittle={'Add New'} link={'users'} />
				<div className={s.friendsList}>
					{friends.map(friend => (
						<div key={friend.id} className={s.friend}>
							<Friend friend={friend} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Profile
