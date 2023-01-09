import "./skill.scss"

import reactImg from "../../img/cards/react.png"
import htmlImg from "../../img/cards/html.png"
import jsImg from "../../img/cards/js.png"
import cssImg from "../../img/cards/css.png"


import ThreeStars from "../../img/cards/3starts.png"
import FourStars from "../../img/cards/4starts.png"
import FiveStars from "../../img/cards/5starts.png"
import LoadingButton from "../loadingBtn/LoadingButton"
import { useEffect, useState } from "react"

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
    }, {
        img: jsImg,
        title: "JavaScript",
        raiting: raitingData[2],
    },
    {
        img: reactImg,
        title: "React",
        raiting: raitingData[2],
    },
    {
        img: htmlImg,
        title: "HTML",
        raiting: raitingData[0],
    },
    {
        img: cssImg,
        title: "CSS/SCSS/LESS",
        raiting: raitingData[1],
    },
]


const Skills = () => {
    const [skillCard, setSkillCard] = useState([])
    const [coutSkillCard, setCoutSkillCard] = useState(3)

    const cardsAll = () => {
        // eslint-disable-next-line
        const cards = skillCard.map((card, i) => {
            if (i <= coutSkillCard) {
                return (
                    <div className="skills__card" key={i}>
                        <img className="skills__cards-img" src={card.img} alt={card.img} />
                        <h5 className="skills__cards-title">{card.title}</h5>
                        <img src={card.raiting} alt={card.raiting} />
                    </div>
                )
            }
        })

        return (
            <div className="skills__cards">
                {cards}
            </div>
        )
    }

    useEffect(() => {
        setSkillCard([...cardData])
    }, [skillCard])

    return (
        <div className="skills">
            <div className="container">
                <div className="skills__inner">
                    <h2 className="skills__title">Skills</h2>
                    <h4 className="skills__info">I work in such programs as</h4>
                    {cardsAll()}
                    {coutSkillCard >= skillCard.length - 1
                        ? <div className="portfolio__end"
                            title="Нажмите для скрытия навыков"
                            onClick={() => setCoutSkillCard(3)}>Конец списка работ</div> : <LoadingButton setText="Loading more..." setClick={() => setCoutSkillCard(count => count + 4)} />}
                </div>
            </div>
        </div>
    )
}

export default Skills