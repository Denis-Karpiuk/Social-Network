import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/BackgroundsHeaders/bg2.jpg'
import s from './Groups.module.css'

const Groups = props => {
	return (
		<div className={s.groups}>
			<HeaderPage img={reactBg} tittle={'Groups'} />
			<div className={s.content}>in progress...</div>
		</div>
	)
}
export default Groups
