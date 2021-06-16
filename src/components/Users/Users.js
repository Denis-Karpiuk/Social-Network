import React from 'react'
import { NavLink } from 'react-router-dom'
import background from '../../assets/images/profile-bg3.jpg'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import Icon from '../Common/Icon/Icon'
import User from './User/User'
import s from './Users.module.css'
import backgroundUser from '../../assets/images/bg3.jpg'

const Users = props => {
	return (
		<div className={s.users}>
			<div className={s.users__header}>
				<HeaderPage img={background} tittle={'Users List'} />
			</div>
			<div className={s.users__list}>
				{props.users.map(user => (
					<User
						key={user.id}
						img={backgroundUser}
						userPhoto={user.photos.large}
						id={user.id}
						userName={user.name}
						followed={user.followed}
						{...props}
					/>
				))}
			</div>
		</div>
	)
}
export default Users

{
	/* <div className={s.user} key={user.id}>
<div className={s.avatar}>
	<NavLink to={'/profile/' + user.id}>
		<Icon img={user.photos.small} />
	</NavLink>
</div>
<div className={s.button}>
	{user.followed ? (
		<button
			disabled={props.followingProgress.some(id => id === user.id)}
			onClick={() => props.unfollow(user.id)}
			className={s.unfollow}
		>
			unfollow
		</button>
	) : (
		<button
			disabled={props.followingProgress.some(id => id === user.id)}
			onClick={() => props.follow(user.id)}
			className={s.follow}
		>
			follow
		</button>
	)}
</div>
<NavLink to={'/video/' + user.id}>
	<div className={s.name}>{user.name}</div>
</NavLink>
<div className={s.place}>
	<div className={s.country}>{'user.place.country'}</div>
	<div className={s.city}>{'user.place.city'}</div>
</div>
<div className={s.status}>
	{!user.status ? 'status' : user.status}
</div>
</div> */
}
