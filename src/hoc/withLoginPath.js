import { withRouter } from 'react-router-dom'

export const withLoginPath = WrappedComponent => {
	const Comp = props => {
		if (props.location.pathname === '/login') return null
		return <WrappedComponent {...props} />
	}
	return withRouter(Comp)
}
