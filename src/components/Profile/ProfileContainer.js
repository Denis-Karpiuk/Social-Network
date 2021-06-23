import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { reset } from 'redux-form'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { takeAutorizedUserId } from '../../redux/Auth-Selectors'
import {
	addPostProfile,
	getProfile,
	getStatus,
	updateProfilePhoto,
	updateStatusProfile,
} from '../../redux/Profile-Reducer'
import {
	takeAboutMe,
	takeContacts,
	takeIsFetching,
	takeLookingForAJob,
	takeLookingForAJobDescription,
	takeMyPosts,
	takeMyPostsCount,
	takeProfile,
	takeProfileId,
	takeProfileName,
	takeProfilePhoto,
	takeStatus,
	takeUserId,
} from '../../redux/Profile-Selectors'
import { getFriends } from '../../redux/Users-Reducer'
import {
	takeFriends,
	takeFriendsCount,
	takeLastFriends,
} from '../../redux/Users-Selectors'
import Preloader from '../Common/Preloader/Preloader'
import Profile from './Profile'

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
		friends: takeLastFriends(state),
		posts: takeMyPosts(state),
		postsCount: takeMyPostsCount(state),
		friendsCount: takeFriendsCount(state),
		aboutMe: takeAboutMe(state),
		contacts: takeContacts(state),
		lookingForAJob: takeLookingForAJob(state),
		lookingForAJobDescription: takeLookingForAJobDescription(state),
		userId: takeUserId(state),
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
