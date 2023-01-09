import "./portfolio.scss"

import portfolio from "../../img/portfolio/portfolio.jpg";
import ComicsPortfolio from "../../img/portfolio/Marvel.jpg";
import JobTodoApp from "../../img/portfolio/JobTodoApp.jpg";
import freelance from "../../img/portfolio/freelance.jpg";
import Todo from "../../img/portfolio/Todo.jpg";
import SporFit from "../../img/portfolio/SporFit.jpg";
import { useEffect, useState } from "react";
import LoadingButton from "../loadingBtn/LoadingButton";

const portfolioData = [
    {
        img: ComicsPortfolio,
        link: "https://github.com/HHussHH/Marvel-Info-portal_React",
    },
    {
        img: JobTodoApp,
        link: "https://github.com/HHussHH/Employee-Accounting_React",
    },
    {
        img: freelance,
        link: "https://github.com/HHussHH/freelance_portfolio-React",
    },
    {
        img: Todo,
        link: "https://github.com/HHussHH/Todo-app_React",
    },
    {
        img: SporFit,
        link: "https://github.com/HHussHH/Proper-nutrition-store",
    },
    {
        img: portfolio,
        link: "https://github.com/HHussHH/portfolio-react",
    },
]



const Portfolio = ({ currentLang }) => {

    const title = currentLang === "ru" ? "Портфолио" : "Portfolio"
    const link = currentLang === "ru" ? "Открыть этот проект" : "Open this project"

    const [cards, setCard] = useState([])
    const [count, setCount] = useState(2)
    const cardCreate = () => {
        // eslint-disable-next-line
        const spawn = cards.map((card, id) => {
            if (id <= count) {
                return (
                    <div className="portfolio_card" key={id}>
                        <div>
                            <img className="portfolio__img" src={card.img} alt={card.img} />
                        </div>
                        <a className="portfolio__link" href={card.link} rel="noreferrer" target="_blank" key={id}>{link}</a>
                    </div>
                )
            }
        })

        return spawn
    }



    useEffect(() => {
        setCard(portfolioData)
    }, [count])
    return (
        <div className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">{title}</h2>
                <div className="portfolio__inner">
                    {cardCreate()}
                    {/* <button className="portfolio__btn" onClick={() => setCount(count => count + 1)}>Loading more...</button> */}
                    {count >= cards.length - 1
                        ? <div className="portfolio__end"
                            title={currentLang === "ru" ? "Нажмите для скрытия работ" : "Click to close works"}
                            onClick={() => setCount(2)}>{currentLang === "ru" ? "Нажмите для скрытия работ" : "Click to close works"}</div> :
                        <LoadingButton
                            setText={currentLang === "ru" ? "Загрузить еще..." : "Loading more..."}
                            setClick={() => setCount(count => count + 1)} />}
                </div>
            </div>
        </div>
    )
}

export default Portfolio