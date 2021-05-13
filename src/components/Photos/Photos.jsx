import s from './Photos.module.css'

const Photos = (props) => {
    let albums = props.albums.map(img => <div className={s.albums__item}> <img src={img} /> </div>)
    let photos = props.photos.map(img => <div className={s.photos__item}> <img src={img} /> </div>)
    let onCreateAlbum = () => props.createAlbum();
    let onAddPhoto = () => props.addPhoto();
    return (
        <div className={s.container}>
            <div className={s.album__main}>
                <div className={s.header}>
                    <div className={s.title}>
                        <span >Мои альбомы </span>
                        <span className={s.count}>{props.sumAlbums}</span>
                    </div>
                    <div className={s.header__buttons}>
                        <button className={s.button_create} onClick={onCreateAlbum} >создать альбом</button>
                        <button className={s.button_add} onClick={onAddPhoto} >добавить фотографии</button>
                    </div>
                </div>
                <div className={s.wrap}>
                    <div className={s.albums}>
                        {albums}
                    </div>
                </div>
            </div>
            <div className={s.photo__main}>
                <div className={s.header}>
                    <div className={s.title}>
                        <span >Мои фотографии </span>
                        <span className={s.count}>{props.sumPhotos}</span>
                    </div>
                </div>
                <div className={s.wrap}>
                    <div className={s.photos}>
                        {photos}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Photos;