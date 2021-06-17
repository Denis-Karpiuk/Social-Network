import { NavLink } from 'react-router-dom'
import s from './TittleItem.module.css'

const TittleItem = ({ tittle, size = 'x-large', subtittle, link }) => {
	let fontSize = {
		fontSize: size,
	}
	return (
		<div className={s.tittleItem}>
			<div style={fontSize} className={s.tittle}>
				{tittle}
			</div>
			<div className={s.tittle__button}>
				<NavLink to={`/${link}`}>
					<div className={s.subtittle}>{subtittle}</div>
				</NavLink>
			</div>
		</div>
	)
}

export default TittleItem
