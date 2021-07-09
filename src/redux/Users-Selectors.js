import { createSelector } from 'reselect'

export const takeTittle = state => state.usersPage.tittle
export const takeUsers = state => state.usersPage.users
export const takeTotalCount = state => state.usersPage.totalCount
export const takePageSize = state => state.usersPage.pageSize
export const takePageNumber = state => state.usersPage.pageNumber
export const takePageStart = state => state.usersPage.pageStart
export const takeIsFetchingUsers = state => state.usersPage.isFetching
export const takeFollowingProgress = state => state.usersPage.followingProgress
export const takeFriends = state => state.usersPage.friends
export const takeFriendsCount = state => state.usersPage.friendsTotalCount
export const takeIsSearchMode = state => state.usersPage.searchMode
export const takeSearchUserName = state => state.usersPage.searchUserName

export const takeLastFriends = createSelector(takeFriends, friends => {
	return friends.slice(0, 12)
})

export const takeNewUsers = createSelector(takeUsers, users => {
	return users.slice(0, 10)
})
