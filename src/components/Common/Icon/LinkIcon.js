import React from 'react'
import icon from '../../../assets/images/export.png'
import s from './LinkIcon.module.css'

const LinkIcon = ({ img, link }) => {
	return (
		<div className={s.licon}>
			<a className={s.links} href={link}>
				<img src={!img ? icon : img} />
			</a>
		</div>
	)
}
export default LinkIcon
