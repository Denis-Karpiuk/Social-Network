import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
	takeBlockName,
	takeFriendsOnline,
	takeLinkPage,
} from '../../redux/FriendsOnline-Selectors'
import FriendItem from './FriendItem/FriendItem'
import s from './FriendsOnline.module.css'

const FriendsOnline = ({ link, friendsOnline }) => {
	return (
		<div className={s.FriendsOnline}>
			<NavLink to={link} activeClassName={s.active}>
				<div>Online</div>
			</NavLink>
			<div className={s.friendsOnline__List}>
				{friendsOnline.map(friend => (
					<FriendItem
						key={friend.id}
						friendName={friend.name}
						img={friend.avatar}
						link={friend.link}
					/>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		link: takeLinkPage(state),
		friendsOnline: takeFriendsOnline(state),
	}
}

const FriendsOnlineContainer = connect(mapStateToProps, {})(FriendsOnline)

export default FriendsOnlineContainer
