import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserLoginData } from '../../redux/Auth-Reducer';
import Avatar from '../Common/Avatar/Avatar';
import s from './Header.module.css';
import Logotype from './Logotype/Logotype';
import Notyfication from './Notyfication/Notyfication';
import Player from './Player/Player';
import Search from './Search/Search';


class Header extends React.Component {
    componentDidMount() {
        this.props.getUserLoginData()
    }
    render() {
        return (
            <div className={s.header} >
                <Logotype />
                <Search />
                <Notyfication />
                <Player />
                <div className={s.loginBlock}>
                    {this.props.auth.isAuth ?
                        <Avatar login={this.props.auth.login} profile={this.props.auth.profile} /> :
                        <NavLink to='/login'>LogIn</NavLink>}
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const HeaderContainer = connect(mapStateToProps, { getUserLoginData })(Header)
export default HeaderContainer;