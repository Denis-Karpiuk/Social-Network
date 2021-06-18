import React from 'react'
import { NavLink } from 'react-router-dom'
import NavIcon from '../../Common/NavIcon/NavIcon'
import s from './Friend.module.css'

const Friend = ({ friend }) => {
	return (
		<div className={s.friend}>
			<div className={s.friend__avatar}>
				<NavIcon
					link={`profile/${friend.id}`}
					img={friend.photos.large}
					r={'50%'}
				></NavIcon>
			</div>
			<div className={s.friend__name}>
				{friend.name.length > 10
					? friend.name.slice(0, 10) + '...'
					: friend.name}
			</div>
		</div>
	)
}
export default Friend
