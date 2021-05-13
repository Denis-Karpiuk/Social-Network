import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

let mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export const withAuth = WrappComponent => {
	let Component = props => {
		if (!props.isAuth) return <Redirect to='/login' />
		return <WrappComponent {...props} />
	}
	return connect(mapStateToProps)(Component)
}
