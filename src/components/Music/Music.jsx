import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import musicBg from '../../assets/images/BackgroundsHeaders/bg3.jpg'
import s from './Music.module.css'

const Music = props => {
	return (
		<div className={s.musicPage}>
			<HeaderPage img={musicBg} tittle={'Music'} />
			<div className={s.content}>in progress...</div>
		</div>
	)
}

export default Music
