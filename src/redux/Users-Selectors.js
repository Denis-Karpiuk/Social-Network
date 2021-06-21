import { createSelector } from 'reselect'

export const takePageName = state => state.usersPage.pageName
export const takeUsers = state => state.usersPage.users
export const takeTotalCount = state => state.usersPage.totalCount
export const takePageSize = state => state.usersPage.pageSize
export const takePageNumber = state => state.usersPage.pageNumber
export const takePageStart = state => state.usersPage.pageStart
export const takeIsFetching = state => state.usersPage.isFetching
export const takeFollowingProgress = state => state.usersPage.followingProgress
export const takeFriends = state => state.usersPage.friends

export const takeFriendsCount = createSelector(takeFriends, friends => {
	return friends.length
})

export const takeNewUsers = createSelector(takeUsers, users => {
	return users.slice(0, 10)
})
