import "./skill.scss"

import reactImg from "../../img/cards/react.png"
import htmlImg from "../../img/cards/html.png"
import jsImg from "../../img/cards/js.png"
import cssImg from "../../img/cards/css.png"


import ThreeStars from "../../img/cards/3starts.png"
import FourStars from "../../img/cards/4starts.png"
import FiveStars from "../../img/cards/5starts.png"

const raitingData = [ThreeStars, FourStars, FiveStars]

const cardData = [
    {
        img: jsImg,
        title: "JavaScript",
        raiting: raitingData[1],
    },
    {
        img: reactImg,
        title: "React",
        raiting: raitingData[1],
    },
    {
        img: htmlImg,
        title: "HTML",
        raiting: raitingData[2],
    },
    {
        img: cssImg,
        title: "CSS/SCSS/LESS",
        raiting: raitingData[2],
    }
]

const cardsAll = () => {
    const cards = cardData.map((card, i) => {
        return (
            <div className="skills__cards">
                <div className="skills__card">
                    <img className="skills__cards-img" src={card.img} alt={card.img} />
                    <h5 className="skills__cards-title">{card.title}</h5>
                    <img src={card.raiting} alt={card.raiting} />
                </div>
            </div>
        )
    })

    return (
        <div className="skills__cards">
            {cards}
        </div>
    )
}
const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <div className="skills__inner">
                    <h2 className="skills__title">Skills</h2>
                    <h4 className="skills__info">I work in such programs as</h4>
                    {cardsAll()}
                </div>
            </div>
        </div>
    )
}

export default Skills