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

const FriendsOnline = ({ link, nameBlock, friendsOnline }) => {
	return (
		<div className={s.item}>
			<div className={s.navlink}>
				<NavLink to={link} activeClassName={s.active}>
					<div>{nameBlock}</div>
				</NavLink>
			</div>
			<div className={s.friendsOnlineList}>
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
		nameBlock: takeBlockName(state),
		friendsOnline: takeFriendsOnline(state),
	}
}

const FriendsOnlineContainer = connect(mapStateToProps, {})(FriendsOnline)

export default FriendsOnlineContainer
