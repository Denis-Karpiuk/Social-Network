import s from './Logotype.module.css'


const Logotype = () => {
    return (
        <div className={s.logotype}>
            <div className={s.img}>
                img  {/* <img src="http://pngimg.com/uploads/vkontakte/vkontakte_PNG3.png" /> */}
            </div>
            <div>Network</div>
        </div>
    )
}

export default Logotype;