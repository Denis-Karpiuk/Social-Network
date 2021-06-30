import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { takeIsAuth } from '../redux/Auth-Selectors'

const mapStateToPropsForRedirect = state => {
	return {
		isAuth: takeIsAuth(state),
	}
}

export const withAuthRedirect = Component => {
	let RedirectComponent = props => {
		if (!props.isAuth) return <Redirect to='/login' />
		return <Component {...props} />
	}
	let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(
		RedirectComponent
	)
	return ConnectRedirectComponent
}
