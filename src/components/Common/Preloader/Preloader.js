import React from 'react'
import preloader from '../../../assets/images/Cube_big.gif'
import s from './Preloader.module.css'
import react from '../../../assets/images/reactGif.gif'

const Preloader = props => {
	return (
		<div role={'preloader'} className={s.preloader}>
			<img className={s.little} src={react} />
		</div>
	)
}
export default Preloader
