import React from 'react'
import { Field, reduxForm } from 'redux-form'
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

const onSubmitText = data => {
	console.log(data)
}

const LogIn = props => {
	return (
		<div className={s.loginPage}>
			<div className={s.pageName}>
				<h2>LogIn</h2>
			</div>
			<div className={s.form}>
				<LogInReduxForm onSubmit={onSubmitText} />
			</div>
		</div>
	)
}

export default LogIn
