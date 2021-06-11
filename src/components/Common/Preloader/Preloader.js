import React from 'react'
import react from '../../../assets/images/reactGif.gif'
import s from './Preloader.module.css'

const Preloader = props => {
	return (
		<div role={'preloader'} className={s.preloader}>
			<img className={s.little} src={react} />
		</div>
	)
}
export default Preloader
