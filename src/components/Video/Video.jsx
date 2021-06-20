import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/video-camera.png'
import s from './Video.module.css'
import Minion from '../Common/Minion/Minion'

const Video = props => {
	return (
		<div className={s.content}>
			<Minion minion={'jump2'} />
		</div>
	)
}
export default Video
