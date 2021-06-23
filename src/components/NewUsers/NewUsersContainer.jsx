import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withLoginPath } from '../../HOC/withLoginPath'
import { takeIsAuthData } from '../../redux/Auth-Selectors'
import { takeNewUsers } from '../../redux/Users-Selectors'
import TittleItem from '../Common/TittleItem/TittleItem'
import NavItem from '../Navbar/NavItem/NavItem'
import s from './NewUsers.module.css'

const NewUsers = ({ newUsers }) => {
	const [newUser, setNewUsers] = useState(newUsers)
	useEffect(() => {
		setNewUsers(newUsers)
	}, [newUsers.length])
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
					<div key={user.id} className={s.newUser}>
						<NavItem
							r='50%'
							img={user.photos.large}
							name={
								user.name.length > 10
									? user.name.slice(0, 10) + '...'
									: user.name
							}
							link={`profile/${user.id}`}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		newUsers: takeNewUsers(state),
		isAuth: takeIsAuthData(state),
	}
}

const NewUsersContainer = compose(
	connect(mapStateToProps, {}),
	withLoginPath
)(NewUsers)

export default NewUsersContainer
