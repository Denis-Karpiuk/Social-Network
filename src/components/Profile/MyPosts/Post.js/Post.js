import like from '../../../../assets/images/iconsApp/like.png'
import NavIcon from '../../../Common/NavIcon/NavIcon'
import s from './Post.module.css'

const Post = ({ likes, text, profilePhoto }) => {
	return (
		<div className={s.post}>
			<div className={s.icon}>
				<NavIcon img={profilePhoto} />
				<div className={s.likes}>
					<div className={s.likes__icon}>
						<NavIcon img={like} />
					</div>
					<div className={s.likes__count}>{likes}</div>
				</div>
			</div>
			<div className={s.textPost}>{text}</div>
		</div>
	)
}

export default Post
