import React from 'react'
import './Preloader.scss'

const Preloader = props => {
	return (
		<div role={'preloader'} className='preloader'>
			<div className='loader'></div>
		</div>
	)
}
export default Preloader
