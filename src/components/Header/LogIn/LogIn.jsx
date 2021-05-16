import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from '../../../redux/Auth-Reducer'
import Preloader from '../../Common/Preloader/Preloader'
import s from './LogIn.module.css'

const LogIn = props => {
	if (props.isFetching) return <Preloader />
	return (
		<div className={s.loginPage}>
			<div className={s.pageName}>
				<h2>LogIn</h2>
			</div>
		</div>
	)
}

export default LogIn
