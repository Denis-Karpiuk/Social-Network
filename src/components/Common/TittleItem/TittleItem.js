import { NavLink } from 'react-router-dom'
import s from './TittleItem.module.css'

const TittleItem = ({ tittle, subtittle, link }) => {
	return (
		<div className={s.tittleItem}>
			<div className={s.tittle}>{tittle}</div>
			<div className={s.tittle__button}>
				<NavLink to={`/${link}`}>
					<div className={s.subtittle}>{subtittle}</div>
				</NavLink>
			</div>
		</div>
	)
}

export default TittleItem
