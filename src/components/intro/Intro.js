import "./intro.scss"
import img from "../../img/bg.png"
const Intro = () => {
    return (
        <main className="intro container">
            <div className="intro__inner">
                <div className="intro__title">Nariman<br />Mustafaev</div>
                <div className="intro__prof">
                    <div className="intro__prof-job">Frontend Dev</div>
                    <div className="intro__prof-old">19 y.o</div>
                    <div className="intro__prof-country">Moscow</div>
                </div>
                <div className="intro__language">
                    <button>RU</button> <b>|</b> <button style={{ color: "#000" }} className="active">ENG</button>
                </div>
            </div>
            <div className="intro__img">
                <img src={img} alt="myPhoto" />
            </div>
        </main>
    )
}

export default Intro