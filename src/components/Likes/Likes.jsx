import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/heart.png'
import s from './Likes.module.css'

const Likes = props => {
	return (
		<div className={s.content}>
			<HeaderPage img={reactBg} tittle={'in progress...'} height={'555px'} />
		</div>
	)
}
export default Likes
