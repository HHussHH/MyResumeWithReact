import "./skill.scss"

import reactImg from "../../img/cards/react.png"
import htmlImg from "../../img/cards/html.png"
import jsImg from "../../img/cards/js.png"
import cssImg from "../../img/cards/css.png"
import gitImg from "../../img/cards/git.png"
import reduxImg from "../../img/cards/redux.png"
import figmaImg from "../../img/cards/figma.png"
import nodeImg from "../../img/cards/node.png"
import bootstrapImg from "../../img/cards/bootstrap.png"


import ThreeStars from "../../img/cards/3starts.png"
import FourStars from "../../img/cards/4starts.png"
import FiveStars from "../../img/cards/5starts.png"
import LoadingButton from "../loadingBtn/LoadingButton"
import { useState } from "react"
import Loading from "../loading/Loading"

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
        img: gitImg,
        title: "GitHub",
        raiting: raitingData[2],
    },
    {
        img: figmaImg,
        title: "Figma",
        raiting: raitingData[2],
    },
    {
        img: nodeImg,
        title: "NodeJs",
        raiting: raitingData[0],
    },
    {
        img: reduxImg,
        title: "Redux",
        raiting: raitingData[1],
    },
    {
        img: bootstrapImg,
        title: "Bootstrap",
        raiting: raitingData[1],
    },
]


const Skills = ({ currentLang, setLoading, isLoading }) => {
    const title = currentLang === "ru" ? "Навыки" : "Skills"
    const info = currentLang === "ru" ? "Работал с этими технологиями" : "I work in such programs as"
    const [currentCountCard, setCurrentCountCard] = useState([...cardData.filter((card, index) => index <= 3)])
    const [coutSkillCard, setCoutSkillCard] = useState(3)


    const cardsAll = () => {
        // eslint-disable-next-line
        const cards = currentCountCard.map((card, i) => {
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


    const resetCardArrayBtn = () => {
        setCoutSkillCard(3)
        setCurrentCountCard([...cardData.filter((card, index) => index <= 3)])
    }


    return (
        <div className="skills">
            <div className="container">
                <div className="skills__inner">
                    <h2 className="skills__title">{title}</h2>
                    <h4 className="skills__info">{info}</h4>
                    {isLoading ? <Loading setLoading={setLoading} /> : cardsAll()}
                    {coutSkillCard >= cardData.length - 1
                        ? <div className="portfolio__end"
                            title={currentLang === "ru" ? "Нажмите для закрытия навыков" : "Click to close skills"}
                            onClick={() => resetCardArrayBtn()}>{currentLang === "ru" ? "Конец списка навыков" : "End of skill list"}</div> :
                        <LoadingButton
                            setText={currentLang === "ru" ? "Загрузить еще..." : "Loading more..."}
                            setClick={() => {
                                return (
                                    setCoutSkillCard(count => count + 4),
                                    setLoading(true),
                                    setCurrentCountCard([...currentCountCard, ...cardData.filter((item, id) => id > coutSkillCard && id < coutSkillCard + 5)])
                                )
                            }}
                        />}
                </div>
            </div>
        </div>
    )
}

export default Skills