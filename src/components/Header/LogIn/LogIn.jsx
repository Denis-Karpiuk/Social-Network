import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../../redux/Auth-Reducer'
import { required } from '../../../util/Validators'
import { Input } from '../../Common/FormsControl/FormsControl'
import Preloader from '../../Common/Preloader/Preloader'
import s from './LogIn.module.css'

const LoginForm = props => {
	return (
		<div>
			<form className={s.loginForm} onSubmit={props.handleSubmit}>
				<div>
					<div className={s.instruction}>
						<h1>Sign in</h1>
						<p>
							Enter your email address and password to access profile panel.
						</p>
					</div>
					<p>Email address</p>
					<Field
						className={s.formInput}
						name='email'
						placeholder='email'
						validate={[required]}
						component={Input}
					/>
				</div>
				<div>
					<p>Password</p>
					<Field
						className={s.formInput + ' ' + s.test}
						name='password'
						placeholder='password'
						validate={[required]}
						component={Input}
						type='password'
					/>
				</div>
				<div className={s.rememberItem}>
					<Field name='rememberMe' component='input' type='checkbox' />
					<div>Remember Me</div>
				</div>
				{props.error && <div className={s.serverError}> {props.error}</div>}
				<div className={s.loginButton}>
					<button>Sign in</button>
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
			<div className={s.welcomBlock}>
				<h1>Welcom to our Network</h1>
			</div>
			<div className={s.loginFormBlock}>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
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
