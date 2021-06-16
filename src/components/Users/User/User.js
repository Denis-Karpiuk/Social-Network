import { NavLink } from 'react-router-dom'
import HeaderPage from '../../Common/HeaderPage/HeaderPage'
import Icon from '../../Common/Icon/Icon'
import s from './User.module.css'

const User = ({ img, userPhoto, userName, id, user, followed, ...props }) => {
	return (
		<div className={s.user}>
			<div className={s.user__background}>
				<img src={img} />
			</div>
			<div className={s.user__info}>
				<div className={s.user__avatar}>
					<NavLink to={'/profile/' + id}>
						<Icon img={userPhoto} />
					</NavLink>
				</div>
				<div className={s.user__name}>{userName}</div>
			</div>
			<div className={s.button}>
				{followed ? (
					<button
						disabled={props.followingProgress.some(id => id === id)}
						onClick={() => props.unfollow(id)}
						className={s.unfollow}
					>
						unfollow
					</button>
				) : (
					<button
						disabled={props.followingProgress.some(id => id === id)}
						onClick={() => props.follow(id)}
						className={s.follow}
					>
						follow
					</button>
				)}
			</div>
		</div>
	)
}

export default User
