import React from 'react'
import Preloader from '../Common/Preloader/Preloader'
import TittleItem from '../Common/TittleItem/TittleItem'
import Friend from './Friend/Friend'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({
	friends,
	profile,
	posts,
	addPostProfile,
	reset,
	profilePhoto,
	...props
}) => {
	if (!profile) {
		return <Preloader />
	}

	return (
		<div className={s.profile}>
			<div className={s.profile__info}>
				<ProfileInfo profilePhoto={profilePhoto} {...props} />
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
