import { createSelector } from 'reselect'

export const takeIsFetching = state => {
	return state.profilePage.isFetching
}

export const takeStatus = state => {
	return state.profilePage.status
}

export const takeProfile = state => {
	return state.profilePage.profile
}

export const takeMyPosts = state => {
	return state.profilePage.myPosts
}

export const takeProfilePhoto = createSelector(takeProfile, profile => {
	return !profile ? null : profile.photos.large
})

export const takeProfileName = createSelector(takeProfile, profile => {
	return !profile ? null : profile.fullName
})

export const takeProfileId = createSelector(takeProfile, profile => {
	return !profile ? null : profile.userId
})

export const takeContacts = createSelector(takeProfile, function (profile) {
	if (!profile) {
		return null
	} else {
		return profile.contacts //obj
	}
})
