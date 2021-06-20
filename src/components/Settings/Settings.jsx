import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/settings.png'
import s from './Settings.module.css'
import Minion from '../Common/Minion/Minion'

const Settings = props => {
	return (
		<div className={s.content}>
			<Minion minion={'settings'} />
		</div>
	)
}
export default Settings
