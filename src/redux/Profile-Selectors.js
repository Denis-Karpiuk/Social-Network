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

export const takeProfileCountry = state => {
	return state.profilePage.profile && state.profilePage.country
}

export const takeProfilePhoto = createSelector(takeProfile, profile => {
	return !profile ? null : profile.photos.small
})

export const takeProfileName = createSelector(takeProfile, profile => {
	return !profile ? null : profile.fullName
})

export const takeProfileId = createSelector(takeProfile, profile => {
	return !profile ? null : profile.userId
})
