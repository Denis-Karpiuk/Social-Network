import { getUsers, getFollow, getUnFollow } from '../apitest/apitest'

const CHANGE_PAGES = 'CHANGE_PAGES'
const CHOICE_PAGE = 'CHOICE_PAGE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

let initialState = {
	pageSize: 100,
	pageNumber: 1,
	totalCount: null,
	pageStart: 1,
	pageName: 'Test',
	usersTest: [],
	isFetching: false,
	isFollowing: [],
}

const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_PAGES: {
			return {
				...state,
				pageStart: action.pageNumber,
				pageNumber: action.pageNumber,
			}
		}
		case CHOICE_PAGE: {
			return {
				...state,
				pageNumber: action.pageNumber,
			}
		}
		case SET_USERS: {
			return {
				...state,
				usersTest: [...action.users],
			}
		}
		case SET_TOTAL_COUNT: {
			return {
				...state,
				totalCount: action.totalCount,
			}
		}
		case TOGGLE_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching,
			}
		}
		case FOLLOW: {
			return {
				...state,
				usersTest: state.usersTest.map(user => {
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
				usersTest: state.usersTest.map(user => {
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

		case TOGGLE_FOLLOWING: {
			return {
				...state,
				isFollowing: action.isFollowing
					? [...state.isFollowing, action.userId]
					: [state.isFollowing.filter(id => id != action.userId)],
			}
		}
		default:
			return state
	}
}

export const changePages = pageNumber => {
	return { type: CHANGE_PAGES, pageNumber }
}

export const choicePage = pageNumber => {
	return { type: CHOICE_PAGE, pageNumber }
}

export const follow = userId => {
	return { type: FOLLOW, userId }
}

export const unFollow = userId => {
	return { type: UNFOLLOW, userId }
}

const setUsersTest = users => {
	return { type: SET_USERS, users }
}

const setTotalCount = totalCount => {
	return { type: SET_TOTAL_COUNT, totalCount }
}

const fetching = isFetching => {
	return { type: TOGGLE_FETCHING, isFetching }
}

const followingUser = (isFollowing, userId) => {
	return { type: TOGGLE_FOLLOWING, isFollowing, userId }
}

export const getUsersTest = (pageNumber, pageSize) => {
	return dispatch => {
		dispatch(fetching(true))
		getUsers(pageNumber, pageSize).then(response => {
			dispatch(setUsersTest(response.data.items))
			dispatch(setTotalCount(response.data.totalCount))
			dispatch(fetching(false))
		})
	}
}

export const followUser = userId => {
	return dispatch => {
		dispatch(followingUser(true, userId))
		getFollow(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(follow(userId))
				dispatch(followingUser(false, userId))
			}
		})
	}
}

export const unFollowUser = userId => {
	return dispatch => {
		dispatch(followingUser(true, userId))
		getUnFollow(userId).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(unFollow(userId))
				dispatch(followingUser(false, userId))
			}
		})
	}
}

export default testReducer
