import React from 'react'
import HeaderPage from '../../Common/HeaderPage/HeaderPage'
import Paginator from '../../Common/Paginator/Paginator'
import User from '../User/User'
import s from './Users.module.css'

const Users = ({
	isSearchMode,
	tittle,
	searchUserName,
	totalCount,
	setSearchUserName,
	...props
}) => {
	return (
		<div className={s.users}>
			<div className={s.users__header}>
				{searchUserName && (
					<div
						onClick={() => {
							setSearchUserName('')
						}}
						className={s.exitSearchMode}
					>
						CLEAR
					</div>
				)}

				<HeaderPage
					img={props.backgroundPage}
					tittle={
						!searchUserName ? tittle : `${searchUserName} / ${totalCount}`
					}
				/>
			</div>
			<div className={s.paginator}>
				<Paginator
					searchUserName={searchUserName}
					totalCount={totalCount}
					{...props}
				/>
			</div>
			<div className={s.users__list}>
				{props.users.map(user => (
					<User
						key={user.id}
						img={props.backgroundUser}
						userPhoto={user.photos.large}
						userId={user.id}
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
