import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { takeAutorizedUserId } from '../../redux/Auth-Selectors'
import {
	getProfile,
	getStatus,
	updateStatusProfile,
} from '../../redux/Profile-Reducer'
import {
	takeContacts,
	takeIsFetching,
	takeProfile,
	takeProfileCountry,
	takeProfileId,
	takeProfileName,
	takeProfilePhoto,
	takeStatus,
} from '../../redux/Profile-Selectors'
import Preloader from '../Common/Preloader/Preloader'
import Profile from './Profile'
import { getFriends } from '../../redux/Users-Reducer'
import { takeFriends } from '../../redux/Users-Selectors'
class ClassProfileContainer extends React.PureComponent {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.autorizedUserId
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
		this.props.getFriends()
	}
	render() {
		if (this.props.isFetching) return <Preloader />
		return (
			<div>
				<Profile {...this.props} />
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
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, {
		getProfile,
		getStatus,
		updateStatusProfile,
		getFriends,
	}),
	withRouter,
	withAuthRedirect
)(ClassProfileContainer)

export default ProfileContainer
