import React from 'react';
import preloader from '../../../assets/images/preloader.gif';
import s from './Preloader.module.css'


const Preloader = (props) => {
    return (
        <div>
            <img className={s.little} src={preloader} />
        </div>
    )
}
export default Preloader;