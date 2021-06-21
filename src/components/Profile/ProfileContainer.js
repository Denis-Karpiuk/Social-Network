import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { takeAutorizedUserId } from '../../redux/Auth-Selectors'
import {
	getProfile,
	getStatus,
	updateStatusProfile,
	addPostProfile,
	updateProfilePhoto,
} from '../../redux/Profile-Reducer'
import {
	takeContacts,
	takeIsFetching,
	takeMyPosts,
	takeMyPostsCount,
	takeProfile,
	takeProfileId,
	takeProfileName,
	takeProfilePhoto,
	takeStatus,
} from '../../redux/Profile-Selectors'
import { getFriends } from '../../redux/Users-Reducer'
import { takeFriends, takeFriendsCount } from '../../redux/Users-Selectors'
import Preloader from '../Common/Preloader/Preloader'
import Profile from './Profile'

import { reset } from 'redux-form'

class ClassProfileContainer extends React.PureComponent {
	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.autorizedUserId
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
		this.props.getFriends()
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.userId !== prevProps.match.params.userId)
			this.refreshProfile()
	}
	render() {
		if (this.props.isFetching) return <Preloader />
		return (
			<div>
				<Profile isOwner={!this.props.match.params.userId} {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		profile: takeProfile(state),
		isFetching: takeIsFetching(state),
		status: takeStatus(state),
		profilePhoto: takeProfilePhoto(state),
		profileName: takeProfileName(state),
		profileId: takeProfileId(state),
		autorizedUserId: takeAutorizedUserId(state),
		friends: takeFriends(state),
		contacts: takeContacts(state),
		posts: takeMyPosts(state),
		postsCount: takeMyPostsCount(state),
		friendsCount: takeFriendsCount(state),
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, {
		reset,
		getProfile,
		getStatus,
		updateStatusProfile,
		getFriends,
		addPostProfile,
		updateProfilePhoto,
	}),
	withRouter,
	withAuthRedirect
)(ClassProfileContainer)

export default ProfileContainer
