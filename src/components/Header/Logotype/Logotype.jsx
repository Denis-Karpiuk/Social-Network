import s from './Logotype.module.css'
import logo from '../../../assets/images/react.png'

const Logotype = () => {
	return (
		<div className={s.logotype}>
			<div className={s.img}>
				<img src={logo} />
			</div>
			<div className={s.networkName}>React Network</div>
		</div>
	)
}

export default Logotype
