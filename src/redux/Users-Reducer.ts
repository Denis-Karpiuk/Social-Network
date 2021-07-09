import { userAPI } from '../api/api'
import { UserType } from './Types/types'

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET_USERS'
const SET_TOTAL_COUNT = 'USERS/SET_TOTAL_COUNT'
const SET_FRIENDS_TOTAL_COUNT = 'USERS/SET_FRIENDS_TOTAL_COUNT'
const SET_ACTIVE_PAGE = 'USERS/SET_ACTIVE_PAGE'
const FETCHING = 'USERS/FETCHING'
const TOGGEL_FOLLOWING_PROGRESS = 'USERS/TOGGEL_FOLLOWING_PROGRESS'
const SET_FRIENDS = 'USERS/SET_FRIENDS'
const SET_SEARCH_USER_NAME = 'USERS/SET_SEARCH_USER_NAME'

let initialState = {
	tittle: 'Users',
	users: [] as Array<UserType>,
	pageSize: 100,
	pageNumber: 1,
	totalCount: 0,
	isFetching: false,
	followingProgress: [] as Array<number>, // array of users ids
	friends: [] as Array<UserType>,
	friendsTotalCount: 0,
	searchUserName: '',
}
export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: true,
						}
					}
					return user
				}),
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: false,
						}
					}
					return user
				}),
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: [...action.users],
			}
		}
		case SET_TOTAL_COUNT: {
			return {
				...state,
				totalCount: action.totalCount,
			}
		}
		case SET_ACTIVE_PAGE: {
			return {
				...state,
				pageNumber: action.pageNumber,
			}
		}
		case FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case TOGGEL_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingProgress: action.isFetching
					? [...state.followingProgress, action.userId]
					: [state.followingProgress.filter(id => id != action.userId)],
			}
		}
		case SET_FRIENDS: {
			return {
				...state,
				friends: action.friends,
			}
		}
		case SET_FRIENDS_TOTAL_COUNT: {
			return {
				...state,
				friendsTotalCount: action.totalCount,
			}
		}
		case SET_SEARCH_USER_NAME: {
			return {
				...state,
				searchUserName: action.searchUserName,
				pageNumber: 1,
			}
		}
		default:
			return state
	}
}

type FollowSuccssesActionType = {
	type: typeof FOLLOW
	userId: number
}
export const followSuccsses = (userId: number): FollowSuccssesActionType => {
	return { type: FOLLOW, userId }
}

type UnfollowSuccssesActionType = {
	type: typeof UNFOLLOW
	userId: number
}
export const unfollowSuccsses = (
	userId: number
): UnfollowSuccssesActionType => {
	return { type: UNFOLLOW, userId }
}

type SetUsersActionType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
	return { type: SET_USERS, users }
}

type SetTotalCountActionType = {
	type: typeof SET_TOTAL_COUNT
	totalCount: number
}
export const setTotalCount = (totalCount: number): SetTotalCountActionType => {
	return { type: SET_TOTAL_COUNT, totalCount }
}

type AactivePageActionType = {
	type: typeof SET_ACTIVE_PAGE
	pageNumber: number
}
export const activePage = (pageNumber: number): AactivePageActionType => {
	return { type: SET_ACTIVE_PAGE, pageNumber }
}

type FetchingPageActionType = {
	type: typeof FETCHING
	isFetching: boolean
}
export const fetching = (isFetching: boolean): FetchingPageActionType => {
	return { type: FETCHING, isFetching }
}

type ToggleFollowingActionType = {
	type: typeof TOGGEL_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}
export const toggleFollowing = (
	isFetching: boolean,
	userId: number
): ToggleFollowingActionType => {
	return { type: TOGGEL_FOLLOWING_PROGRESS, isFetching, userId }
}

type SetFriendsActionType = {
	type: typeof SET_FRIENDS
	friends: Array<UserType>
}
export const setFriends = (friends: Array<UserType>): SetFriendsActionType => {
	return {
		type: SET_FRIENDS,
		friends,
	}
}
export const setFriendsTotalCount = (totalCount: number) => {
	return {
		type: SET_FRIENDS_TOTAL_COUNT,
		totalCount,
	}
}
export const setSearchUserName = (searchUserName: string) => {
	return {
		type: SET_SEARCH_USER_NAME,
		searchUserName,
	}
}
export const getUsers = (
	pageNumber: number,
	userName: string,
	pageSize: number
) => async (dispatch: any) => {
	dispatch(fetching(true))
	const response = await userAPI.getUsers(pageNumber, userName, pageSize)
	dispatch(setUsers(response.data.items))
	dispatch(setTotalCount(response.data.totalCount))
	dispatch(fetching(false))
}

export const unfollow = (userId: number) => async (dispatch: any) => {
	dispatch(toggleFollowing(true, userId))
	const response = await userAPI.unfollowUser(userId)
	if (response.data.resultCode === 0) {
		dispatch(unfollowSuccsses(userId))
	}
	dispatch(getFriends(1, 100))
	dispatch(toggleFollowing(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
	dispatch(toggleFollowing(true, userId))
	const response = await userAPI.followUser(userId)
	if (response.data.resultCode === 0) {
		dispatch(followSuccsses(userId))
	}
	dispatch(getFriends(1, 100))
	dispatch(toggleFollowing(false, userId))
}

export const getFriends = (pageNumber: number, pageSize: number) => async (
	dispatch: any
) => {
	dispatch(fetching(true))
	const response = await userAPI.getFriends(pageNumber, pageSize)
	dispatch(setFriends(response.data.items))
	dispatch(setFriendsTotalCount(response.data.totalCount))

	dispatch(fetching(false))
	return Promise.resolve(true)
}

export default usersReducer
