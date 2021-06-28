import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/Auth-Reducer'
import {
	takeCaptchaURL,
	takeIsAuth,
	takeIsFetching,
} from '../../redux/Auth-Selectors'
import { required } from '../../util/Validators'
import { Input } from '../Common/FormsControl/FormsControl'
import Preloader from '../Common/Preloader/Preloader'
import s from './LogIn.module.css'

const LoginForm = ({ handleSubmit, error, captchaURL }) => {
	return (
		<div className={s.form}>
			<form onSubmit={handleSubmit}>
				<div>
					<div className={s.form__instruction}>
						<h1>Sign in</h1>
						<p>
							Enter your email address and password to access profile panel.
						</p>
					</div>
					<p>Email address</p>
					<Field
						name='email'
						placeholder='email'
						validate={[required]}
						component={Input}
					/>
				</div>
				<div>
					<p>Password</p>
					<Field
						name='password'
						placeholder='password'
						validate={[required]}
						component={Input}
						type='password'
					/>
				</div>
				<div className={s.form__checkbox}>
					<Field name='rememberMe' component={Input} type='checkbox' />
					<div>Remember Me</div>
				</div>
				{captchaURL && (
					<div className={s.captcha}>
						<div className={s.captchaImg}>
							<img src={captchaURL} />
						</div>
						<Field name='captcha' component={Input} validate={[required]} />
					</div>
				)}
				{error && <div className={s.form__serverError}> {error}</div>}
				<div className={s.form__button}>
					<button>Sign in</button>
				</div>
			</form>
		</div>
	)
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LogIn = ({ isAuth, login, isFetching, captchaURL }) => {
	if (isAuth) return <Redirect to='/' />
	const onSubmit = formData => {
		login(
			formData.email,
			formData.password,
			formData.rememberMe,
			formData.captcha
		)
	}
	if (isFetching) return <Preloader />
	return (
		<div className={s.loginPage}>
			<div className={s.loginForm}>
				<LoginReduxForm captchaURL={captchaURL} onSubmit={onSubmit} />
			</div>
			<div className={s.welcome}>Welcome React Network</div>
		</div>
	)
}
const mapStateToProps = state => {
	return {
		isAuth: takeIsAuth(state),
		isFetching: takeIsFetching(state),
		captchaURL: takeCaptchaURL(state),
	}
}
const LoginContainer = connect(mapStateToProps, { login })(LogIn)

export default LoginContainer
