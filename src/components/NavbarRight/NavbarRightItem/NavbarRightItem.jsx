import s from './NavbarRightItem.module.css'

const NavbarRightItem = (props) => {
    return (
        <div className={s.item}>
            <a href={props.link}>
                {props.name}
            </a>
        </div>
    )
}

export default NavbarRightItem;