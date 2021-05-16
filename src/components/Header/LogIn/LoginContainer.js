import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { loginUser } from '../../../redux/Auth-Reducer'
import LogIn from './LogIn'

class LoginClassContainer extends React.Component {
	render() {
		let onSubmit = loginData => {
			this.props.loginUser(loginData)
		}
		if (this.props.isAuth) return <Redirect to='/profile' />
		return <LogIn onSubmit={onSubmit} />
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}
const LoginContainer = connect(mapStateToProps, { loginUser })(
	LoginClassContainer
)

export default LoginContainer
