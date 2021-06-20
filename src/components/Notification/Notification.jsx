import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/notification.png'
import s from './Notification.module.css'
import Minion from '../Common/Minion/Minion'

const Notification = props => {
	return (
		<div className={s.content}>
			<Minion minion={'push'} />
		</div>
	)
}
export default Notification
