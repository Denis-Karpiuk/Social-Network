import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import backgroundUser from '../../assets/images/BackgroundsHeaders/bg3.jpg'
import backgroundPage from '../../assets/images/BackgroundsHeaders/usersBg.jpg'
import {
	activePage,
	follow,
	getUsers,
	unfollow,
	setSearchUserName,
} from '../../redux/Users-Reducer'
import {
	takeFollowingProgress,
	takeIsFetchingUsers,
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

const UsersComponentContainer = ({
	getUsers,
	follow,
	unfollow,
	isSearchMode,
	pageSize,
	searchUserName,
	pageNumber,
	setSearchUserName,
	...props
}) => {
	useEffect(() => {
		getUsers(pageNumber, searchUserName, pageSize)
	}, [searchUserName])

	const onPageNumber = pageNumber => {
		props.activePage(pageNumber)
		getUsers(pageNumber, searchUserName, pageSize)
	}
	const toUnfollow = userId => {
		unfollow(userId)
	}

	const toFollow = userId => {
		follow(userId)
	}
	return (
		<>
			{props.isFetching ? (
				<Preloader />
			) : (
				<Users
					setSearchUserName={setSearchUserName}
					pageNumber={pageNumber}
					pageSize={pageSize}
					searchUserName={searchUserName}
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
		isFetching: takeIsFetchingUsers(state),
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
		setSearchUserName,
	}),
	withRouter
)(UsersComponentContainer)
export default UsersContainer
