import "./portfolio.scss"

import firstPortfolio from "../../img/portfolio/p1.png";
import secondPortfolio from "../../img/portfolio/p2.png";
import ThreePortfolio from "../../img/portfolio/p3.png";

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
]

const portfolioView = () => {
    const portfolioCard = portfolioData.map((card, i) => {
        return (
            <div className="portfolio_card">
                <div>
                    <img className="portfolio__img" src={card.img} alt={card.img} />
                </div>
                <a className="portfolio__link" href={card.link} rel="noreferrer" target="_blank">Open this project</a>
            </div>
        )
    })

    return portfolioCard
}
const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">Portfolio</h2>
                <div className="portfolio__inner">
                    {portfolioView()}
                    <button className="portfolio__btn">Loading more...</button>
                </div>
            </div>
        </div>
    )
}

export default Portfolio