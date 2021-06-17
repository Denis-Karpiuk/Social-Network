import s from './HeaderPage.module.css'

const HeaderPage = ({ tittle, img, height = '275px' }) => {
	let heightHeader = {
		height: height,
	}
	return (
		<div className={s.headerPage}>
			<div style={heightHeader} className={s.bakcground}>
				<img src={img} />
			</div>
			<div className={s.tittle}></div>
			<div className={s.tittle__text}>{tittle}</div>
		</div>
	)
}

export default HeaderPage
