import React from 'react'
import { NavLink } from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem'
import s from './NavFriends.module.css'


const NavFriends = (props) => {
    let friendsItems = props.state.friends.map(friend => <FriendItem key={friend.id} name={friend.name} img={friend.avatar} link={friend.link} />)
    return (
        <div className={s.item}>
            <div className={s.navlink}>
                <NavLink to={props.state.link} activeClassName={s.active}>
                    <div>{props.state.name}</div>
                </NavLink>
            </div>
            <div className={s.friendsItems}>
                {friendsItems}
            </div>
        </div>
    )
}

export default NavFriends;