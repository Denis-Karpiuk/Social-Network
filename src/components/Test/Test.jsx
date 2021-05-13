import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png'
import Paginator from '../Common/Paginator/Paginator'
import Preloader from '../Common/Preloader/Preloader'
import s from './Test.module.css'

const Test = props => {
	if (props.testPage.isFetching) return <Preloader />
	return (
		<div className={s.usersTestPage}>
			<h1>Test 60-69</h1>
			<Paginator
				totalCount={props.testPage.totalCount}
				pageSize={props.testPage.pageSize}
				pageStart={props.testPage.pageStart}
				pageNumber={props.testPage.pageNumber}
				prevNextPages={props.prevNextPages}
				activePage={props.activePage}
			/>

			<div className={s.usersTest}>
				{props.testPage.usersTest.map(user => (
					<div key={user.id} className={s.user}>
						<div className={s.userPhoto}>
							<NavLink to={'/profile/' + user.id}>
								<img src={!user.photos.small ? userPhoto : user.photos.small} />
							</NavLink>
						</div>
						<div className={s.buttons}>
							{user.followed ? (
								<button
									className={s.unfollow}
									onClick={() => props.unFollowUser(user.id)}
									disabled={props.testPage.isFollowing.some(
										id => id === user.id
									)}
								>
									Unfollow
								</button>
							) : (
								<button
									className={s.follow}
									onClick={() => props.followUser(user.id)}
									disabled={props.testPage.isFollowing.some(
										id => id === user.id
									)}
								>
									Follow
								</button>
							)}
						</div>
						<div className={s.userName}>{user.name}</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Test
