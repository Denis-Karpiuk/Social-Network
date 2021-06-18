import { NavLink } from 'react-router-dom'
import React from 'react'
import Icon from '../../Common/Icon/Icon'
import s from './Friend.module.css'

const Friend = ({ friend }) => {
	return (
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
	)
}
export default Friend
