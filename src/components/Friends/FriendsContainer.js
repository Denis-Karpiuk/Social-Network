import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import backgroundPage from '../../assets/images/BackgroundsHeaders/bg3.jpg'
import backgroundUser from '../../assets/images/BackgroundsHeaders/friendsBg.jpg'
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
import Friends from '../Users/Users/Users'

let tittle = 'Friends'

const FriendsContainer = ({ pageSize, ...props }) => {
	const [pageNumber, setPageNumber] = useState(1)
	useEffect(() => {
		props.getFriends(pageNumber, pageSize)
	}, [pageNumber, pageSize, props.followingProgress])

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
				<Friends
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

const FriendsContainerF = connect(mapStateToProps, {
	follow,
	unfollow,
	activePage,
	getFriends,
})(FriendsContainer)
export default FriendsContainerF
