import React from 'react'
import { connect } from 'react-redux'
import {
	activePage,
	follow,
	unfollow,
	getUsers,
} from '../../redux/Users-Reducer'
import {
	takeFollowingProgress,
	takeIsFetching,
	takePageNumber,
	takePageSize,
	takeTotalCount,
	takeUsers,
} from '../../redux/Users-Selectors'
import Preloader from '../Common/Preloader/Preloader'
import Users from './Users/Users'
import backgroundPage from '../../assets/images/BackgroundsHeaders/usersBg.jpg'
import backgroundUser from '../../assets/images/BackgroundsHeaders/bg3.jpg'
let tittle = 'Users'

class UsersComponentContainer extends React.Component {
	componentDidMount() {
		getUsers(this.props.pageNumber, this.props.pageSize)
	}
	onPageNumber = pageNumber => {
		this.props.activePage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	}
	toUnfollow = userId => {
		this.props.unfollow(userId)
	}

	toFollow = userId => {
		this.props.follow(userId)
	}
	render() {
		return (
			<>
				{this.props.isFetching ? (
					<Preloader style={this.style} />
				) : (
					<Users
						tittle={tittle}
						backgroundPage={backgroundPage}
						backgroundUser={backgroundUser}
						users={this.props.users}
						pageNumber={this.props.pageNumber}
						totalCount={this.props.totalCount}
						pageSize={this.props.pageSize}
						onPageNumber={this.onPageNumber}
						follow={this.toFollow}
						unfollow={this.toUnfollow}
						isFetching={this.props.isFetching}
						followingProgress={this.props.followingProgress}
					/>
				)}
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: takeUsers(state),
		pageSize: takePageSize(state),
		pageNumber: takePageNumber(state),
		isFetching: takeIsFetching(state),
		followingProgress: takeFollowingProgress(state),
		totalCount: takeTotalCount(state),
	}
}

const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	activePage,
	getUsers,
})(UsersComponentContainer)
export default UsersContainer
