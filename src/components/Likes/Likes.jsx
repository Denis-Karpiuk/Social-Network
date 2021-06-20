import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/heart.png'
import s from './Likes.module.css'
import Minion from '../Common/Minion/Minion'

const Likes = props => {
	return (
		<div className={s.content}>
			<Minion minion={'fly'} />
		</div>
	)
}
export default Likes
