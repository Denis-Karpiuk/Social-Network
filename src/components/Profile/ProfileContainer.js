import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { takeAutorizedUserId } from '../../redux/Auth-Selectors'
import {
	getProfile,
	getStatus,
	updateStatusProfile,
} from '../../redux/Profile-Reducer'
import {
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

class ClassProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.autorizedUserId
		}
		this.props.getProfile(userId)
		this.props.getStatus(userId)
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
		profileCountry: takeProfileCountry(state),
		autorizedUserId: takeAutorizedUserId(state),
	}
}

const ProfileContainer = compose(
	connect(mapStateToProps, {
		getProfile,
		getStatus,
		updateStatusProfile,
	}),
	withRouter,
	withAuthRedirect
)(ClassProfileContainer)

export default ProfileContainer
