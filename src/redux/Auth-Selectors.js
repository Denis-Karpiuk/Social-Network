export const takeAutorizedUserId = state => {
	return state.auth.userId
}

export const takeAutorizedLogin = state => {
	return state.auth.login
}

export const takeIsAuthData = state => {
	return state.auth.isAuth
}
export const takeAuthUserPhoto = state => state.auth.userAuthPhoto
