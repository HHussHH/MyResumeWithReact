import { NavLink } from "react-router-dom";
import "./header.scss";
const headerDataEng = [
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
const headerDataRu = [
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
const normalLink = "header__item-link";
const activeLink = "header__item-link header__item-link-active";


const Header = ({ currentLang }) => {
    const currectLanguage = currentLang === "eng" ? [...headerDataEng] : [...headerDataRu];

    const headerList = () => {
        const listLink = currectLanguage.map((item, id) => {
            return (
                <li className="header__item" key={id}>
                    <NavLink to={item.link} className={({ isActive }) => isActive ? activeLink : normalLink} key={id}>{item.name}</NavLink>
                </li>
            )
        })

        return (
            <>
                <ul className="header__list" >
                    {listLink}
                </ul>
                <br />
            </>
        )
    }

    return (
        <nav className="header__nav">
            <div className="container">
                {headerList()}
            </div>
        </nav>
    )
}

export default Header