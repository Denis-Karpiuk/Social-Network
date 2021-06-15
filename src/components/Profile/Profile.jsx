import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import profilePhoto from '../../assets/images/avatar1.png'
import github from '../../assets/images/github.png'
import gmail from '../../assets/images/gmail.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import background from '../../assets/images/profile-bg.jpg'
import telegram from '../../assets/images/telegram.png'
import youtube from '../../assets/images/youtube.png'
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
	...props
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
						{/* {}//! Массив с сылками на сети, с проверкой совпадение по названию и */}
						<div className={s.link__item}>
							<LinkIcon img={github} link={''} />
						</div>
						<div className={s.link__item}>
							<LinkIcon img={linkedin} link={''} />
						</div>
						<div className={s.link__item}>
							<LinkIcon img={instagram} link={''} />
						</div>
						<div className={s.link__item}>
							<LinkIcon img={youtube} link={''} />
						</div>
					</div>
					<div className={s.profile__avatar}>
						<Icon img={profilePhoto} />
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
				<TittleItem tittle={'Friends'} buttonName={'Add New'} />
				<div className={s.friendsList}>
					{friends.map(friend => (
						<div className={s.friend}>
							<div className={s.friend__avatar}>
								<Icon img={friend.photos.small} r={'50%'}></Icon>
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
				<TittleItem tittle={'My Posts'} buttonName={'. . .'} />
			</div>
		</div>
	)
}

export default Profile
