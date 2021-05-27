import React from 'react'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	activePage,
	changePages,
	follow,
	getUsers,
	unfollow,
} from '../../redux/Users-Reducer'
import Preloader from '../Common/Preloader/Preloader'
import Users from './Users'

class UsersComponentContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.pageNumber, this.props.pageSize)
	}
	render() {
		let onPageNubmer = pageNumber => {
			this.props.activePage(pageNumber)
			this.props.getUsers(pageNumber, this.props.pageSize)
		}
		let onNext = (pageStart, maxPageCount) => {
			if (pageStart < maxPageCount) {
				this.props.changePages(pageStart)
				this.props.getUsers(pageStart, this.props.pageSize)
			}
		}
		let onPrev = pageStart => {
			if (pageStart >= 1) {
				this.props.changePages(pageStart)
				this.props.getUsers(pageStart, this.props.pageSize)
			}
		}

		let toUnfollow = userId => {
			this.props.unfollow(userId)
		}

		let toFollow = userId => {
			this.props.follow(userId)
		}
		return (
			<>
				{this.props.isFetching ? (
					<Preloader style={this.style} />
				) : (
					<Users
						users={this.props.users}
						pageName={this.props.pageName}
						pageNumber={this.props.pageNumber}
						totalCount={this.props.totalCount}
						pageSize={this.props.pageSize}
						pageStart={this.props.pageStart}
						onNext={onNext}
						onPrev={onPrev}
						onPageNubmer={onPageNubmer}
						follow={toFollow}
						unfollow={toUnfollow}
						isFetching={this.props.isFetching}
						followingProgress={this.props.followingProgress}
						isAuth={this.props.isAuth}
					/>
				)}
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		pageName: state.usersPage.pageName,
		users: state.usersPage.users,
		totalCount: state.usersPage.totalCount,
		pageSize: state.usersPage.pageSize,
		pageNumber: state.usersPage.pageNumber,
		pageStart: state.usersPage.pageStart,
		isFetching: state.usersPage.isFetching,
		followingProgress: state.usersPage.followingProgress,
	}
}

const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	changePages,
	activePage,
	getUsers,
})(UsersComponentContainer)
export default UsersContainer
