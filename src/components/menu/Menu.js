import "./menu.scss"
import { NavLink } from "react-router-dom";


const normalLink = "menu__item-link";
const activeLink = "menu__item-link menu__item-link-active";


const Menu = ({ setMenu }) => {
    return (
        <div className="menu">
            <ul className="menu__inner">
                <li className="menu__item">
                    <NavLink to={"/"}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                        onClick={() => setMenu(false)}>Home</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={"/about"}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                        onClick={() => setMenu(false)}>About me</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={"/portfolio"}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                        onClick={() => setMenu(false)}>Portfolio</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={"/contacts"}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                        onClick={() => setMenu(false)}>Contacts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu