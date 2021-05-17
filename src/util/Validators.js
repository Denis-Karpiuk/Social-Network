import React from 'react'

export const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)

export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined
