import { NavLink } from 'react-router-dom'
import s from './FriendItem.module.css'
import Icon from '../../Common/Icon/Icon'

const FriendItem = ({ link, img, friendName }) => {
	return (
		<div className={s.friend}>
			<div className={s.fiend__avatar}>
				<NavLink to={link}>
					<Icon photo={img} />
				</NavLink>
			</div>
			<div className={s.friend__name}>{friendName}</div>
		</div>
	)
}

export default FriendItem
