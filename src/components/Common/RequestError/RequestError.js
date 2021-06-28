import s from './RequestError.module.css'

const RequestError = ({ requestError }) => {
	return (
		<div className={s.error}>
			<div className={s.errorText}>{requestError}</div>
		</div>
	)
}

export default RequestError
