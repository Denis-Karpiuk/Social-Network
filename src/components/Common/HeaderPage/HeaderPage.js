import s from './HeaderPage.module.css'

const HeaderPage = ({ tittle, img }) => {
	return (
		<div className={s.headerPage}>
			<div className={s.bakcground}>
				<img src={img} />
			</div>
			<div className={s.tittle}></div>
			<div className={s.tittle__text}>{tittle}</div>
		</div>
	)
}

export default HeaderPage
