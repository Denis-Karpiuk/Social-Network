import React from 'react'
import { Field } from 'redux-form'
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
	let hasError = meta.touched && meta.error
	return (
		<div className={hasError ? s.error : s.input}>
			<input {...input} {...props} />
			<div>{hasError ? <span>{meta.error}</span> : ''}</div>
		</div>
	)
}
export const InputSearch = ({ input, meta, ...props }) => {
	let hasError = meta.touched && meta.error
	return (
		<div className={hasError ? s.error : s.input}>
			<input type='search' required {...input} {...props} />
			<div>{hasError && <span>{meta.error}</span>}</div>
		</div>
	)
}

export const createField = (
	name,
	placeholder,
	validate,
	component,
	type = ''
) => {
	return (
		<div>
			<Field
				name={name}
				placeholder={placeholder}
				validate={validate}
				component={component}
				type={type}
			/>
		</div>
	)
}
