import React from 'react'
import s from './FormsControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {
	let hasError = meta.touched && meta.error
	return (
		<div className={hasError ? s.error : s.formTextarea}>
			<textarea {...input} {...props} />
			<div>{hasError ? <span>{meta.error}</span> : ''}</div>
		</div>
	)
}

export const Input = ({ input, meta, ...props }) => {
	debugger
	let hasError = meta.touched && meta.error
	return (
		<div className={hasError ? s.error : s.input}>
			<input {...input} {...props} />
			<div>{hasError ? <span>{meta.error}</span> : ''}</div>
		</div>
	)
}
