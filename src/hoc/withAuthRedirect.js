import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const mapStateToPropsForRedirect = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

// export const withAuthRedirect =  (Comoponent) => {
//      class RedirectComponent extends React.Component {
//         render(){
//             if(!this.props.isAuth) return <Redirect to='/login'/>
//             return <Comoponent {...this.props}/>
//         }
//     }

//     let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
//     return ConnectRedirectComponent;
// }

export const withAuthRedirect = Component => {
	let RedirectComponent = props => {
		if (!props.isAuth) return <Redirect to='/login' />
		return <Component {...props} />
	}
	let ConnectRedirectComponent = connect(mapStateToPropsForRedirect)(
		RedirectComponent
	)
	return ConnectRedirectComponent
}
