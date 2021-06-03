import React from 'react'
import preloader from '../../../assets/images/Cube_big.gif'
import s from './Preloader.module.css'

const Preloader = props => {
	return (
		<div className={s.preloader}>
			<img className={s.little} src={preloader} />
		</div>
	)
}
export default Preloader
