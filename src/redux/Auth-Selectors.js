export const takeAutorizedUserId = state => {
	return state.auth.userId
}

export const takeAutorizedLogin = state => {
	return state.auth.login
}

export const takeIsAuth = state => {
	return state.auth.isAuth
}
export const takeIsFetching = state => {
	return state.auth.isFetching
}

export const takeCaptchaURL = state => {
	return state.auth.captchaURL
}
