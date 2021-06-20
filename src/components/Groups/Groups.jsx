import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/BackgroundsHeaders/bg2.jpg'
import s from './Groups.module.css'
import Minion from '../Common/Minion/Minion'

const Groups = props => {
	return (
		<div className={s.groups}>
			<HeaderPage img={reactBg} tittle={'Groups'} />
			<Minion minion={'groups'} />
		</div>
	)
}
export default Groups
