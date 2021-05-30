import { createSelector } from 'reselect'
// примитивные селекторы
export const takeUsers = state => state.usersPage.users
export const takePageName = state => state.usersPage.pageName
export const takeTotalCount = state => state.usersPage.totalCount
export const takePageSize = state => state.usersPage.pageSize
export const takePageNumber = state => state.usersPage.pageNumber
export const takePageStart = state => state.usersPage.pageStart
export const takeIsFetching = state => state.usersPage.isFetching
export const takeFollowingProgress = state => state.usersPage.followingProgress

//сложный селектор
export const takeUsersSelector = createSelector(takeUsers, users => {
	return users.filter(user => user.id > 0)
})
