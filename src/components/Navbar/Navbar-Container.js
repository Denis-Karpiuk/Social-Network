import { connect } from 'react-redux'
import Navbar from './Navbar'

let mapStateToProps = state => {
	return {
		navbarBlock: state.navbar.navbarBlock,
		navFriends: state.navbar.navFriends,
	}
}
const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
