import { userAPI } from '../api/api'

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET_USERS'
const SET_TOTAL_COUNT = 'USERS/SET_TOTAL_COUNT'
const SET_FRIENDS_TOTAL_COUNT = 'USERS/SET_FRIENDS_TOTAL_COUNT'
const SET_ACTIVE_PAGE = 'USERS/SET_ACTIVE_PAGE'
const FETCHING = 'USERS/FETCHING'
const TOGGEL_FOLLOWING_PROGRESS = 'USERS/TOGGEL_FOLLOWING_PROGRESS'
const SET_FRIENDS = 'USERS/SET_FRIENDS'
const TOGGEL_SEARCH_MODE = 'USERS/TOGGEL_SEARCH_MODE'

let initialState = {
	tittle: 'Users',
	users: [],
	pageSize: 100,
	pageNumber: 1,
	totalCount: 0,
	isFetching: false,
	followingProgress: [],
	friends: [],
	friendsTotalCount: 0,
	searchMode: false,
	searchUserName: '',
}
const usersReducer = (state = initialState, action) => {
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
		case TOGGEL_SEARCH_MODE: {
			return {
				...state,
				searchMode: action.isSearchMode,
				searchUserName: action.searchUserName,
			}
		}
		default:
			return state
	}
}

export const followSuccsses = userId => {
	return { type: FOLLOW, userId }
}
export const unfollowSuccsses = userId => {
	return { type: UNFOLLOW, userId }
}
export const setUsers = users => {
	return { type: SET_USERS, users }
}
export const setTotalCount = totalCount => {
	return { type: SET_TOTAL_COUNT, totalCount }
}
export const activePage = pageNumber => {
	return { type: SET_ACTIVE_PAGE, pageNumber }
}
export const fetching = isFetching => {
	return { type: FETCHING, isFetching }
}
export const toggleFollowing = (isFetching, userId) => {
	return { type: TOGGEL_FOLLOWING_PROGRESS, isFetching, userId }
}
export const setFriends = friends => {
	return {
		type: SET_FRIENDS,
		friends,
	}
}
export const setFriendsTotalCount = totalCount => {
	return {
		type: SET_FRIENDS_TOTAL_COUNT,
		totalCount,
	}
}
const setSearchMode = (isSearchMode, searchUserName) => {
	return {
		type: TOGGEL_SEARCH_MODE,
		isSearchMode,
		searchUserName,
	}
}
export const getUsers = (pageNumber, pageSize) => async dispatch => {
	dispatch(fetching(true))
	dispatch(setSearchMode(false, ''))
	const response = await userAPI.getUsers(pageNumber, pageSize)
	dispatch(setUsers(response.data.items))
	dispatch(setTotalCount(response.data.totalCount))
	dispatch(fetching(false))
}
export const getSearchUser = (
	userName,
	pageNumber,
	pageSize
) => async dispatch => {
	dispatch(fetching(true))
	dispatch(setSearchMode(true, userName))
	const response = await userAPI.getSearchUser(userName, pageNumber, pageSize)
	dispatch(setUsers(response.data.items))
	dispatch(setTotalCount(response.data.totalCount))
	dispatch(fetching(false))
}

export const unfollow = userId => async dispatch => {
	dispatch(toggleFollowing(true, userId))
	const response = await userAPI.unfollowUser(userId)
	if (response.data.resultCode === 0) {
		dispatch(unfollowSuccsses(userId))
	}
	dispatch(toggleFollowing(false, userId))
}

export const follow = userId => async dispatch => {
	dispatch(toggleFollowing(true, userId))
	const response = await userAPI.followUser(userId)
	if (response.data.resultCode === 0) {
		dispatch(followSuccsses(userId))
	}
	dispatch(toggleFollowing(false, userId))
}

export const getFriends = (pageNumber, pageSize) => async dispatch => {
	// dispatch(fetching(true))
	const response = await userAPI.getFriends(pageNumber, pageSize, true)
	dispatch(setFriends(response.data.items))
	dispatch(setFriendsTotalCount(response.data.totalCount))
	// dispatch(fetching(false))
}

export default usersReducer
