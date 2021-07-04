import NavIcon from '../../Common/NavIcon/NavIcon'
import s from './User.module.css'

type UserType = {
	img: string
	userPhoto: string | null
	userName: string
	userId: number | null
	followed: boolean
	followingProgress: Array<number>
	toFollow: (userId: number | null) => void
	toUnfollow: (userId: number | null) => void
}

const User = ({
	img,
	userPhoto,
	userName,
	userId,
	followed,
	followingProgress,
	toFollow,
	toUnfollow,
}: UserType) => {
	return (
		<div className={s.user}>
			<div className={s.user__background}>
				<img src={img} />
			</div>
			<div className={s.user__info}>
				<div className={s.user__avatar}>
					<NavIcon link={'profile/' + userId} img={userPhoto} r={'50%'} />
				</div>
				<div className={s.user__name}>{userName}</div>
			</div>
			<div className={s.button}>
				{followed ? (
					<button
						disabled={followingProgress.some(id => id === userId)}
						onClick={() => toUnfollow(userId)}
						className={s.unfollow}
					>
						unfollow
					</button>
				) : (
					<button
						disabled={followingProgress.some(id => id === userId)}
						onClick={() => toFollow(userId)}
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
