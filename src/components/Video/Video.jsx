import React from 'react'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import reactBg from '../../assets/images/iconsApp/video-camera.png'
import s from './Video.module.css'

const Video = props => {
	return (
		<div className={s.content}>
			<HeaderPage img={reactBg} tittle={'in progress...'} height={'555px'} />
		</div>
	)
}
export default Video
