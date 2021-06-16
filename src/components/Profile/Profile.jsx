import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, Form, reduxForm } from 'redux-form'
import background from '../../assets/images/profile-bg.jpg'
import { required } from '../../util/Validators'
import Icon from '../Common/Icon/Icon'
import LinkIcon from '../Common/Icon/LinkIcon'
import Preloader from '../Common/Preloader/Preloader'
import TittleItem from '../Common/TittleItem/TittleItem'
import s from './Profile.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const PostForm = ({ handleSubmit }) => {
	return (
		<div className={s.postForm}>
			<Form onSubmit={handleSubmit}>
				<Field
					name='post'
					placeholder='Write something here...'
					validate={[required]}
					component='textarea'
					type='textarea'
				/>
				<div className={s.postForm__button}>
					<button>Create Post</button>
				</div>
			</Form>
		</div>
	)
}
const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

const Profile = ({
	updateStatusProfile,
	status,
	profileName,
	friends,
	profile,
	profilePhoto,
	contacts,
}) => {
	if (!profile || !friends) {
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
						{Object.keys(contacts).map(key =>
							contacts[key] ? (
								<div className={s.link__item}>
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
			<div className={s.createPost}>
				<TittleItem tittle={'Create Post'} />
				<div className={s.createPost__item}>
					<div className={s.createPost__avatar}>
						<Icon photo={null} />
					</div>
					<div className={s.createPost__textarea}>
						<PostReduxForm />
					</div>
				</div>
			</div>
			<div className={s.friends}>
				<TittleItem tittle={'Friends'} subtittle={'Add New'} link={'users'} />
				<div className={s.friendsList}>
					{friends.map(friend => (
						<div className={s.friend}>
							<div className={s.friend__avatar}>
								<NavLink to={'/profile/' + friend.id}>
									<Icon img={friend.photos.large} r={'50%'}></Icon>
								</NavLink>
							</div>
							<div className={s.friend__name}>
								{friend.name.length > 10
									? friend.name.slice(0, 10) + '...'
									: friend.name}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={s.myPosts}>
				<TittleItem tittle={'My Posts'} subtittle={'. . .'} />
			</div>
		</div>
	)
}

export default Profile
