import { NavLink } from "react-router-dom";
import "./header.scss";

const headerData = [
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
const normalLink = "header__item-link";
const activeLink = "header__item-link header__item-link-active";
const headerList = () => {
    const listLink = headerData.map((item, id) => {
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

const Header = () => {
    return (
        <nav className="header__nav">
            <div className="container">
                {headerList()}
            </div>
        </nav>
    )
}

export default Header