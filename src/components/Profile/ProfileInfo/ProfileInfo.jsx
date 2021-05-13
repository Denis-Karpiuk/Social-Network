import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <div className={s.profileInfo}>
                <div className={s.img}>
                    <img src={props.avatar} />
                </div>
                <div className={s.description}>{props.description}</div>
            </div >
        )
    }
    return (
        <div className={s.userProfile}>
            <div className={s.userAvatar}>
                <img src={props.profile.data.photos.large} />
            </div>
        </div>
    )
}
export default ProfileInfo;