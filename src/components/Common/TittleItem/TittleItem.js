import s from './TittleItem.module.css'

const TittleItem = ({ tittle, buttonName, onclick }) => {
	return (
		<div className={s.tittleItem}>
			<div className={s.tittle}>{tittle}</div>
			<div className={s.tittle__button}>
				<button onClick={onclick}>{buttonName}</button>
			</div>
		</div>
	)
}

export default TittleItem
