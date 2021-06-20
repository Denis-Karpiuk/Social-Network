import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import musicBg from '../../assets/images/BackgroundsHeaders/bg3.jpg'
import s from './Music.module.css'
import Minion from '../Common/Minion/Minion'

const Music = props => {
	return (
		<div className={s.musicPage}>
			<HeaderPage img={musicBg} tittle={'Music'} />
			<Minion minion={'dance'} />
		</div>
	)
}

export default Music
