import "./menu.scss"
import { NavLink } from "react-router-dom";


const normalLink = "menu__item-link";
const activeLink = "menu__item-link menu__item-link-active";
const menuDataEng = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About me",
        link: "/about"
    },
    {
        name: "Skills",
        link: "/skills"
    },
    {
        name: "Portfolio",
        link: "/portfolio"
    },
    {
        name: "Contacts",
        link: "/contacts"
    },
]
const menuDataRu = [
    {
        name: "Главная",
        link: "/"
    },
    {
        name: "Обо мне",
        link: "/about"
    },
    {
        name: "Навыки",
        link: "/skills"
    },
    {
        name: "Портфолио",
        link: "/portfolio"
    },
    {
        name: "Контакты",
        link: "/contacts"
    },
]


const Menu = ({ setMenu, currentLang, setLang }) => {
    const createMenuItemEng = () => {

        const item = menuDataEng.map((item, id) => {
            return (
                <li className="menu__item" id={id}>
                    <NavLink to={item.link}
                        className={({ isActive }) => isActive ? activeLink : normalLink}
                        onClick={() => setMenu(false)}>{item.name}</NavLink>
                </li>
            )
        })
        return (
            <ul className="menu__inner">
                {item}
                <button
                    className="menu_switcher"
                    style={currentLang === "ru" ? { color: "#000" } : null}
                    onClick={() => setLang("ru")}>RU</button>
                <div></div>
                <button
                    className="menu_switcher"
                    style={currentLang === "eng" ? { color: "#000" } : null}
                    onClick={() => setLang("eng")}
                >ENG</button>
            </ul>
        )
    }

    return (
        <div className="menu">
            <ul className="menu__inner">
                {createMenuItemEng()}
            </ul>

        </div>
    )
}

export default Menu