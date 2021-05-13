import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {
	getProfile,
	getStatus,
	updateStatusProfile,
} from '../../redux/Profile-Reducer'
import Preloader from '../Common/Preloader/Preloader'
import Profile from './Profile'

class ClassProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 7370
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
	}
	render() {
		if (this.props.profilePage.isFetching) return <Preloader />
		return (
			<div>
				<Profile {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		profilePage: state.profilePage,
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, { getProfile, getStatus, updateStatusProfile }),
	withRouter,
	withAuthRedirect
)(ClassProfileContainer)

export default ProfileContainer
