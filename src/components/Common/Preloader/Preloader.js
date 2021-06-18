import React from 'react'
import react from '../../../assets/images/iconsApp/reactGif.gif'
import s from './Preloader.module.css'

const Preloader = props => {
	return (
		<div role={'preloader'} className={s.preloader}>
			<img src={react} />
		</div>
	)
}
export default Preloader
