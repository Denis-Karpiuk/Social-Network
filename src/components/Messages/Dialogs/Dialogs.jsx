import s from '.././Messages.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = props => {
	return (
		<div className={s.messageItem}>
			<NavLink to={'/messages/' + props.id} activeClassName={s.active}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default Dialogs
