import s from './Friends.module.css'
import HeaderPage from '../Common/HeaderPage/HeaderPage'
import background from '../../assets/images/BackgroundsHeaders/friendsBg.jpg'
import Paginator from '../Common/Paginator/Paginator'

const Friends = props => {
	return (
		<div className={s.friends}>
			<div className={s.header}>
				<HeaderPage img={background} tittle={'Friends List'} />
			</div>
			<div className={s.paginator}>
				<Paginator />
			</div>
		</div>
	)
}
export default Friends
