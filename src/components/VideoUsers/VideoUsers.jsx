import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './VideoUsers.module.css'
import userPhoto from '../../assets/images/user.png'

const VideoUsers = props => {
	return (
		<div>
			<div>
				<h1>Video Page</h1>
			</div>
			<div className={s.users}>
				{props.users.map(user => (
					<div className={s.user} key={user.id}>
						<div className={s.avatar}>
							<NavLink to={'/profile/' + user.id}>
								<img
									src={
										user.photos.small != null ? user.photos.small : userPhoto
									}
								/>
							</NavLink>
						</div>
						{/* <div className={s.button}>
                        {user.followed
                            ? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => props.unfollow(user.id)} className={s.unfollow}>unfollow</button>
                            : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => props.follow(user.id)} className={s.follow}>follow</button>}
                    </div> */}
						<NavLink to={'/video/' + user.id}>
							<div className={s.name}>{user.name}</div>
						</NavLink>
						<div className={s.place}>
							<div className={s.country}>{'user.place.country'}</div>
							<div className={s.city}>{'user.place.city'}</div>
						</div>
						<div className={s.status}>{user.status}</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default VideoUsers
