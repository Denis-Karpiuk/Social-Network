import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/star.png'
import s from './Stars.module.css'

const Stars = props => {
	return (
		<div className={s.content}>
			<HeaderPage img={reactBg} tittle={'in progress...'} height={'555px'} />
		</div>
	)
}
export default Stars
