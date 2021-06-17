import { NavLink } from 'react-router-dom'
import HeaderPage from '../../Common/HeaderPage/HeaderPage'
import Icon from '../../Common/Icon/Icon'
import s from './User.module.css'

const User = ({
	img,
	userPhoto,
	userName,
	userId,
	user,
	followed,
	followingProgress,
	unfollow,
	follow,
}) => {
	return (
		<div className={s.user}>
			<div className={s.user__background}>
				<img src={img} />
			</div>
			<div className={s.user__info}>
				<div className={s.user__avatar}>
					<NavLink to={'/profile/' + userId}>
						<Icon img={userPhoto} r={'50%'} />
					</NavLink>
				</div>
				<div className={s.user__name}>{userName}</div>
			</div>
			<div className={s.button}>
				{followed ? (
					<button
						disabled={followingProgress.some(id => id === userId)}
						onClick={() => unfollow(userId)}
						className={s.unfollow}
					>
						unfollow
					</button>
				) : (
					<button
						disabled={followingProgress.some(id => id === userId)}
						onClick={() => follow(userId)}
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
