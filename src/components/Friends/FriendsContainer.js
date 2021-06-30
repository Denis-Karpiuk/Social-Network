import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import backgroundPage from '../../assets/images/BackgroundsHeaders/bg3.jpg'
import backgroundUser from '../../assets/images/BackgroundsHeaders/friendsBg.jpg'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import {
	activePage,
	follow,
	getFriends,
	unfollow,
} from '../../redux/Users-Reducer'
import {
	takeFollowingProgress,
	takeFriends,
	takeFriendsCount,
	takeIsFetching,
	takePageSize,
} from '../../redux/Users-Selectors'
import Preloader from '../Common/Preloader/Preloader'
import Users from '../Users/Users/Users'

let tittle = 'Friends'

const FriendsContainer = ({ pageSize, ...props }) => {
	const [pageNumber, setPageNumber] = useState(1)
	useEffect(() => {
		props.getFriends(pageNumber, pageSize)
	}, [pageNumber, pageSize, props.totalCount])

	const onPageNumber = pageNumber => {
		setPageNumber(pageNumber)
		props.getFriends(pageNumber, pageSize)
	}
	const toUnfollow = userId => {
		props.unfollow(userId)
	}

	const toFollow = userId => {
		props.follow(userId)
	}
	return (
		<>
			{props.isFetching ? (
				<Preloader />
			) : (
				<Users
					pageNumber={pageNumber}
					pageSize={pageSize}
					onPageNumber={onPageNumber}
					toUnfollow={toUnfollow}
					toFollow={toFollow}
					backgroundPage={backgroundPage}
					tittle={tittle}
					backgroundUser={backgroundUser}
					{...props}
				/>
			)}
		</>
	)
}

const mapStateToProps = state => {
	return {
		users: takeFriends(state),
		pageSize: takePageSize(state),
		isFetching: takeIsFetching(state),
		followingProgress: takeFollowingProgress(state),
		totalCount: takeFriendsCount(state),
	}
}

const FriendsContainerF = compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		activePage,
		getFriends,
	}),
	withAuthRedirect
)(FriendsContainer)
export default FriendsContainerF
