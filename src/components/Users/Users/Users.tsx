import React from 'react'
import { UserType } from '../../../redux/Types/types'
import HeaderPage from '../../Common/HeaderPage/HeaderPage'
import Paginator from '../../Common/Paginator/Paginator'
import User from '../User/User'
import s from './Users.module.css'

type UsersType = {
	isSearchMode: boolean
	tittle: string
	searchUserName: string
	totalCount: number
	setSearchUserName: (userName: string) => void
	pageSize: number
	pageNumber: number
	portionSize?: number
	onPageNumber: (page: number) => void
	users: Array<UserType>
	backgroundUser: string
	backgroundPage: string
	followed: boolean
	followingProgress: Array<number>
	toFollow: (userId: number | null) => void
	toUnfollow: (userId: number | null) => void
}

const Users = ({
	isSearchMode,
	tittle,
	searchUserName,
	totalCount,
	setSearchUserName,
	users,
	backgroundUser,
	backgroundPage,
	onPageNumber,
	pageNumber,
	pageSize,
	toFollow,
	toUnfollow,
	followingProgress,
}: UsersType) => {
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
					img={backgroundPage}
					tittle={
						!searchUserName ? tittle : `${searchUserName} / ${totalCount}`
					}
				/>
			</div>
			<div className={s.paginator}>
				<Paginator
					totalCount={totalCount}
					pageSize={pageSize}
					pageNumber={pageNumber}
					onPageNumber={onPageNumber}
				/>
			</div>
			<div className={s.users__list}>
				{users.map(user => (
					<User
						key={user.id}
						img={backgroundUser}
						userPhoto={user.photos.large}
						userId={user.id}
						userName={user.name}
						followed={user.followed}
						toFollow={toFollow}
						toUnfollow={toUnfollow}
						followingProgress={followingProgress}
					/>
				))}
			</div>
		</div>
	)
}
export default Users
