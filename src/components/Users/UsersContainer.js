import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import backgroundUser from '../../assets/images/BackgroundsHeaders/bg3.jpg'
import backgroundPage from '../../assets/images/BackgroundsHeaders/usersBg.jpg'
import {
	activePage,
	follow,
	getSearchUser,
	getUsers,
	unfollow,
} from '../../redux/Users-Reducer'
import {
	takeFollowingProgress,
	takeIsFetching,
	takeIsSearchMode,
	takePageNumber,
	takePageSize,
	takeSearchUserName,
	takeTittle,
	takeTotalCount,
	takeUsers,
} from '../../redux/Users-Selectors'
import Preloader from '../Common/Preloader/Preloader'
import Users from './Users/Users'

const UsersComponentContainer = props => {
	let location = useLocation()
	useEffect(() => {
		getUsers(props.pageNumber, props.pageSize)
	}, [location])
	const onPageNumber = pageNumber => {
		props.activePage(pageNumber)

		props.getUsers(pageNumber, props.pageSize)
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
					toFollow={toFollow}
					toUnfollow={toUnfollow}
					onPageNumber={onPageNumber}
					backgroundPage={backgroundPage}
					backgroundUser={backgroundUser}
					{...props}
				/>
			)}
		</>
	)
}

const mapStateToProps = state => {
	return {
		users: takeUsers(state),
		pageSize: takePageSize(state),
		pageNumber: takePageNumber(state),
		isFetching: takeIsFetching(state),
		followingProgress: takeFollowingProgress(state),
		totalCount: takeTotalCount(state),
		tittle: takeTittle(state),
		isSearchMode: takeIsSearchMode(state),
		searchUserName: takeSearchUserName(state),
	}
}

const UsersContainer = compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		activePage,
		getUsers,
		getSearchUser,
	}),
	withRouter
)(UsersComponentContainer)
export default UsersContainer
