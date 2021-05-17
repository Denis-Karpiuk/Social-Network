import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../../redux/Auth-Reducer'
import Preloader from '../../Common/Preloader/Preloader'
import s from './LogIn.module.css'

const LoginForm = props => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field name='email' placeholder='email' component='input' />
				</div>
				<div>
					<Field
						name='password'
						placeholder='password'
						component='input'
						type='password'
					/>
				</div>
				<div>
					<Field name='rememberMe' component='input' type='checkbox' />
					rememberMe
				</div>
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	)
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LogIn = props => {
	if (props.isAuth) return <Redirect to='/profile' />
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}
	if (props.isFetching) return <Preloader />
	return (
		<div className={s.loginPage}>
			<p>LogIn</p>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		isFetching: state.auth.isFetching,
	}
}
const LoginContainer = connect(mapStateToProps, { login })(LogIn)

export default LoginContainer
