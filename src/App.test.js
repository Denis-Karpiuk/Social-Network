import React from 'react'
import { render, screen } from '@testing-library/react'
import MainApp from './App'

test('renders div main', () => {
	render(<MainApp />)
	const div = screen.getByRole(/preloader/i)
	expect(div).toBeInTheDocument()
})

// test('renders learn react link', () => {
// 	render(<MainApp />)
// 	screen.debug()
// })
