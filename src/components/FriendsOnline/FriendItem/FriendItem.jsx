import { NavLink } from 'react-router-dom'
import s from './FriendItem.module.css'

const FriendItem = ({ link, img, friendName }) => {
	return (
		<div className={s.item}>
			<NavLink to={link}>
				<div>
					<img src={img} />
				</div>
				<div className={s.itemName}>{friendName}</div>
			</NavLink>
		</div>
	)
}

export default FriendItem
