import React from 'react'
import background from '../../../assets/images/BackgroundsHeaders/profileBg.jpg'
import LinkIcon from '../../Common/LinkIcon/LinkIcon'
import Icon from '../../Common/Icon/Icon'
import s from './ProfileInfo.module.css'
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import AboutBlock from '../AboutBlock/AboutBlock'
import AboutReduxForm from '../FormAbout/FormAbout'

const ProfileInfo = ({
	updateStatusProfile,
	status,
	profileName,
	profilePhoto,
	contacts,
	updateProfilePhoto,
	postsCount,
	friendsCount,
	isOwner,
	aboutMe,
	lookingForAJob,
	lookingForAJobDescription,
	profile,
	editMode,
	toogleEditMode,
	updateProfile,
}) => {
	let savePhoto = e => {
		if (e.target.files.length) {
			updateProfilePhoto(e.target.files[0])
		}
	}
	let onClickPhoto = () => {
		document.getElementById('files').click()
	}

	let onSubmit = formData => {
		updateProfile(formData).then(() => toogleEditMode(false))
	}
	let onEditMode = () => {
		toogleEditMode(true)
	}
	return (
		<div className={s.profileInfo}>
			<div className={s.profileInfo__background}>
				<img src={background} />
			</div>
			<div className={s.profileInfo__data}>
				<div className={s.data__contacts}>
					{Object.keys(contacts).map((key, index) =>
						contacts[key] ? (
							<div key={key} className={s.contact__item}>
								<LinkIcon img={key} link={contacts[key]} />
							</div>
						) : null
					)}
				</div>
				{isOwner ? (
					<div className={s.data__avatar} onDoubleClick={onClickPhoto}>
						<Icon img={profilePhoto} r='50%' />
						<input
							className={s.addPhoto}
							id={'files'}
							type={'file'}
							onChange={savePhoto}
						/>
					</div>
				) : (
					<div className={s.data__avatar}>
						<Icon img={profilePhoto} r='50%' />
					</div>
				)}
				<div className={s.data__name__status}>
					<div className={s.data__name}>{profileName}</div>
					<div className={s.data__status}>
						<ProfileStatus
							isOwner={isOwner}
							status={status}
							updateStatus={updateStatusProfile}
						/>
					</div>
				</div>

				<div className={s.data__statistics}>
					<div className={s.statistics__posts}>
						<div className={s.name}>Posts</div>
						<div className={s.count}>{postsCount}</div>
					</div>
					<div className={s.statistics__Friends}>
						<div className={s.name}>Friends</div>
						<div className={s.count}>{friendsCount}</div>
					</div>
				</div>

				<div className={s.profile__about}>
					{editMode ? (
						<AboutReduxForm
							initialValues={profile}
							onSubmit={onSubmit}
							contacts={contacts}
						/>
					) : (
						<AboutBlock
							onEditMode={onEditMode}
							isOwner={isOwner}
							aboutMe={aboutMe}
							lookingForAJob={lookingForAJob}
							lookingForAJobDescription={lookingForAJobDescription}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
