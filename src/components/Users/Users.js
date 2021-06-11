import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Common/Icon/Icon'
import s from './Users.module.css'

const Users = props => {
	let maxPageCount = Math.ceil(props.totalCount / props.pageSize)
	let pagesNumbers = []
	for (let i = props.pageStart; i < props.pageStart + 10; i++) {
		if (i - 1 < maxPageCount) {
			pagesNumbers.push(i)
		}
	}
	let prevPageNumber = props.pageStart - 10
	let nextPageNumber = props.pageStart + 10
	return (
		<div className={s.UsersPage}>
			<div className={s.pageName}>{props.pageName}</div>
			<div className={s.paginator}>
				<span onClick={() => props.onPrev(prevPageNumber)} className={s.prev}>
					Prev
				</span>
				{pagesNumbers.map(page => (
					<span
						key={page}
						onClick={() => props.onPageNubmer(page)}
						className={page === props.pageNumber ? s.activedPage : null}
					>
						{page}
					</span>
				))}
				<span
					onClick={() => props.onNext(nextPageNumber, maxPageCount)}
					className={s.next}
				>
					Next
				</span>
			</div>
			<div className={s.users}>
				{props.users.map(user => (
					<div className={s.user} key={user.id}>
						<div className={s.avatar}>
							<NavLink to={'/profile/' + user.id}>
								<Icon
									photo={user.photos.small}
									width={'120px'}
									height={'120px'}
								/>
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
					</div>
				))}
			</div>
		</div>
	)
}
export default Users
