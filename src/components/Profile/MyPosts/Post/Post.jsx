import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.post}>
            <div>
                <div className={s.item}>
                    <img src={props.img} />
                    <div>{props.text}</div>
                </div>
                <div className='count'>
                    like {props.likesCount}
                </div>

            </div>
        </div >
    )
}

export default Post;