import s from './AboutBlock.module.css'
import edit from '../../../assets/images/iconsApp/edit.png'
import Icon from '../../Common/Icon/Icon'
const AboutBlock = ({
	aboutMe,
	lookingForAJob,
	lookingForAJobDescription,
	isOwner,
	onEditMode,
}) => {
	return (
		<div className={s.aboutBlock}>
			{isOwner && (
				<div className={s.editIcon} onClick={onEditMode}>
					<Icon img={edit} />
				</div>
			)}
			<div className={s.jobs__looking}>
				<b>Looking for a job :</b> {!lookingForAJob ? 'No' : 'Yes'}
			</div>
			{lookingForAJob && (
				<div className={s.jobs__looking__description}>
					<b>My professionl skills :</b>
					{lookingForAJobDescription}
				</div>
			)}

			<div className={s.about}>
				<b>About Me :</b> {aboutMe}
			</div>
		</div>
	)
}

export default AboutBlock
