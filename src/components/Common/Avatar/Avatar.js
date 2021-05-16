import React from 'react'
import userPhoto from '../../../assets/images/user.png'
import s from './Avatar.module.css'

const Avatar = props => {
	return (
		<div className={s.avatar}>
			<div>
				<span>{props.login}</span>
			</div>
			<div>
				<img
					src={
						!props.profile || !props.profile.photos.small
							? userPhoto
							: props.profile.photos.small
					}
				/>
			</div>
		</div>
	)
}

export default Avatar
