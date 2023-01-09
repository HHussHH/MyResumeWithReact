import "./portfolio.scss"

import firstPortfolio from "../../img/portfolio/p1.png";
import secondPortfolio from "../../img/portfolio/p2.png";
import ThreePortfolio from "../../img/portfolio/p3.png";
import { useEffect, useState } from "react";
import LoadingButton from "../loadingBtn/LoadingButton";

const portfolioData = [
    {
        img: firstPortfolio,
        link: "https://github.com/",
    },
    {
        img: secondPortfolio,
        link: "https://github.com/",
    },
    {
        img: ThreePortfolio,
        link: "https://github.com/",
    },
    {
        img: firstPortfolio,
        link: "https://github.com/",
    },
    {
        img: secondPortfolio,
        link: "https://github.com/",
    },
    {
        img: ThreePortfolio,
        link: "https://github.com/",
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
                            onClick={() => setCount(2)}>{currentLang === "ru" ? "Загрузить еще..." : "Loading more..."}</div> :
                        <LoadingButton
                            setText={currentLang === "ru" ? "Загрузить еще..." : "Loading more..."}
                            setClick={() => setCount(count => count + 1)} />}
                </div>
            </div>
        </div>
    )
}

export default Portfolio