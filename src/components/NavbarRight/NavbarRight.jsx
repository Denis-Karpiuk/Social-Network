import s from './NavbarRight.module.css'
import NavbarRightItem from './NavbarRightItem/NavbarRightItem'

const NavbarRight = () => {
    return (
        <div className={s.navbarRight}>
            <NavbarRightItem link='recommend' name="Рекомендации" />
            <NavbarRightItem link='likes' name="Понравилось" />
            <NavbarRightItem link='comments' name="Комментарии" />
        </div>
    )
}

export default NavbarRight;