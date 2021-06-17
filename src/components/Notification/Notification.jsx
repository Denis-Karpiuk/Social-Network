import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/notification.png'
import s from './Notification.module.css'

const Notification = props => {
	return (
		<div className={s.content}>
			<HeaderPage img={reactBg} tittle={'in progress...'} height={'555px'} />
		</div>
	)
}
export default Notification
