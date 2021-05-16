import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../../../redux/Auth-Reducer'
import s from './LogIn.module.css'

const LogInForm = props => {
	return (
		<div className={s.loginForm}>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field name='email' placeholder='email' component='input' />
				</div>
				<div>
					<Field name='password' placeholder='password' component='input' />
				</div>
				<div>
					<Field name='rememberMe' component='input' type='checkbox' />
					remember me
				</div>
				<div className={s.loginButton}>
					<button>LogIn</button>
				</div>
			</form>
		</div>
	)
}

const LogInReduxForm = reduxForm({ form: 'login' })(LogInForm)

const onSubmit = loginData => loginUser(loginData)

const LogIn = props => {
	return (
		<div className={s.loginPage}>
			<div className={s.pageName}>
				<h2>LogIn</h2>
			</div>
			<div className={s.form}>
				<LogInReduxForm onSubmit={props.onSubmit} />
			</div>
		</div>
	)
}

export default LogIn
