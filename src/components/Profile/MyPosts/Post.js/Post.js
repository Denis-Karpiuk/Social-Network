import like from '../../../../assets/images/iconsApp/like.png'
import Icon from '../../../Common/Icon/Icon'
import s from './Post.module.css'

const Post = ({ likes, text, profilePhoto }) => {
	return (
		<div className={s.post}>
			<div className={s.icon}>
				<Icon img={profilePhoto} r='50%' />
				<div className={s.likes}>
					<div className={s.likes__icon}>
						<Icon img={like} />
					</div>
					<div className={s.likes__count}>{likes}</div>
				</div>
			</div>
			<div className={s.textPost}>{text}</div>
		</div>
	)
}

export default Post
