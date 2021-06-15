import { userAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const USERSSET = 'USERSSET'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const CHANGE_PAGES = 'CHANGE_PAGES'
const ACTIVEPAGE = 'ACTIVEPAGE'
const FETCHING = 'FETCHING'
const TOGGEL_FOLLOWING_PROGRESS = 'TOGGEL_FOLLOWING_PROGRESS'
const SET_FRIENDS = 'users/SET_FRIENDS'

let initialState = {
	pageName: 'Пользователи',
	users: [],
	pageSize: 100,
	pageNumber: 1,
	totalCount: 0,
	pageStart: 1,
	isFetching: false,
	followingProgress: [],
	friends: null,
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
		case USERSSET: {
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
		case CHANGE_PAGES: {
			return {
				...state,
				pageStart: action.pageStart,
				pageNumber: action.pageStart,
			}
		}
		case ACTIVEPAGE: {
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
export const usersSet = users => {
	return { type: USERSSET, users }
}
export const setTotalCount = totalCount => {
	return { type: SET_TOTAL_COUNT, totalCount }
}
export const changePages = pageStart => {
	return { type: CHANGE_PAGES, pageStart }
}
export const activePage = pageNumber => {
	return { type: ACTIVEPAGE, pageNumber }
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

export const getUsers = (pageNumber, pageSize) => {
	return dispatch => {
		dispatch(fetching(true))
		userAPI.getUsers(pageNumber, pageSize).then(response => {
			dispatch(fetching(false))
			dispatch(usersSet(response.data.items))
			dispatch(setTotalCount(response.data.totalCount))
		})
	}
}

export const unfollow = userId => {
	return dispatch => {
		dispatch(toggleFollowing(true, userId))
		userAPI.unfollowUser(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(unfollowSuccsses(userId))
			}
			dispatch(toggleFollowing(false, userId))
		})
	}
}

export const follow = userId => {
	return dispatch => {
		dispatch(toggleFollowing(true, userId))
		userAPI.followUser(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(followSuccsses(userId))
			}
			dispatch(toggleFollowing(false, userId))
		})
	}
}

export const getFriends = () => async dispatch => {
	let response = await userAPI.getFriends()
	dispatch(setFriends(response.data.items))
}

export default usersReducer
