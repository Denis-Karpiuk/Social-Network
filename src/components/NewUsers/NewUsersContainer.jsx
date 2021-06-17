import React, { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { takeLastUsers, takeNewUsers } from '../../redux/Users-Selectors'
import TittleItem from '../Common/TittleItem/TittleItem'
import NavItem from '../Navbar/NavItem/NavItem'
import LastUser from './NewUser'
import s from './NewUsers.module.css'

const NewUsers = ({ newUsers }) => {
	const [newUser, setnewUsers] = useState(newUsers)
	return (
		<div className={s.newUsers}>
			<TittleItem
				tittle={'New Users'}
				size={'large'}
				link={'users'}
				subtittle={'more'}
			/>
			<div className={s.lastUsers__List}>
				{newUser.map(user => (
					<NavItem
						img={user.photos.large}
						name={user.name}
						link={`profile/${user.id}`}
					/>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		newUsers: takeNewUsers(state),
	}
}

const NewUsersContainer = connect(mapStateToProps, {})(NewUsers)

export default NewUsersContainer

{
	/* <LastUser
						key={friend.id}
						friendName={friend.name}
						img={friend.avatar}
						link={''}
					/> */
}
