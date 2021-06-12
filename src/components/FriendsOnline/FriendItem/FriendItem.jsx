import { NavLink } from 'react-router-dom'
import s from './FriendItem.module.css'
import Icon from '../../Common/Icon/Icon'

const FriendItem = ({ link, img, friendName }) => {
	return (
		<NavLink to={link} activeClassName={s.active}>
			<div className={s.friend}>
				<div className={s.fiend__avatar}>
					<Icon photo={img} />
				</div>
				<div className={s.friend__name}>{friendName}</div>
			</div>
		</NavLink>
	)
}

export default FriendItem
