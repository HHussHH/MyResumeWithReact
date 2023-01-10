import "./intro.scss"
import img from "../../img/bg.png"
import mobileImg from "../../img/mobileBg.png"

const Intro = ({ setLang, currentLang }) => {

    const name = [currentLang === "ru" ? "Нариман" : "Nariman", currentLang === "ru" ? "Мустафаев" : "Mustafaev"]
    const info = [
        currentLang === "ru" ? "Фронтенд разработчик" : "Frontend Dev",
        currentLang === "ru" ? "19 лет" : "19 y.o",
        currentLang === "ru" ? "Москва" : "Moscow",
    ]

    return (
        <main className="intro container">
            <div className="intro__inner">
                <div className="intro__title">{name[0]}<br />{name[1]}</div>
                <div className="intro__prof">
                    <div className="intro__prof-job">{info[0]}</div>
                    <div className="intro__prof-old">{info[1]}</div>
                    <div className="intro__prof-country">{info[2]}</div>
                </div>
                <div className="intro__language">
                    <button
                        style={currentLang === "ru" ? { color: "#000" } : null}
                        onClick={() => setLang("ru")}>RU</button>
                    <b>|</b>
                    <button
                        style={currentLang === "eng" ? { color: "#000" } : null}
                        onClick={() => setLang("eng")}>ENG</button>
                </div>
            </div>
            <div className="intro__img">
                <img src={img} alt="myPhoto" />
            </div>
            <div className="intro__Mbimg">
                <img src={mobileImg} alt="myPhoto" />
            </div>
        </main>
    )
}

export default Intro