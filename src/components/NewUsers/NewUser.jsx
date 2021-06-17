import { NavLink } from 'react-router-dom'
import s from './NewUser.module.css'
import Icon from '../Common/Icon/Icon'

const NewUser = ({ link, img, friendName }) => {
	return (
		<NavLink to={link} activeClassName={s.active}>
			<div className={s.lastUser}>
				<div className={s.lastUser__avatar}>
					<Icon photo={img} />
				</div>
				<div className={s.lastUser__name}>{friendName}</div>
			</div>
		</NavLink>
	)
}

export default NewUser
