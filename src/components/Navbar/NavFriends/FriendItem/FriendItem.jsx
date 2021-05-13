import { NavLink } from 'react-router-dom';
import NavFriends from '../NavFriends';
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.link}>
                <div>
                    <img src={props.img} />
                </div>
                <div className={s.itemName}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default FriendItem;