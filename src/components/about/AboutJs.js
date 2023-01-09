import "./about.scss"

const AboutJs = ({ currentLang }) => {

    const title = currentLang === "ru" ? "Обо мне" : "About me"

    const content = [
        currentLang === "ru" ? "Привет, меня зовут Нариман - я фронтенд разработчик. Живу в Москве" :
            "Hi, I'm Nariman – Frontend Dev. from Moscow.",
        currentLang === "ru" ? "Я интересуюсь веб разработкой и всем, что связанно с ней." :
            "I'm interested in design and everything connected with it.",
        currentLang === "ru" ? "Я обучаюсь на курсах по веб разработка на React" :
            "I'm studying at courses Web and mobile design",
        currentLang === "ru" ? "А так же являюсь студентов IT направления в колледже" :
            "I am also an IT student at the college",
        currentLang === "ru" ? "Готов к созданию по настоящему великих проектов" :
            "Ready to implement excellent projects",
        currentLang === "ru" ? "В команде с профессионалами своего дела" :
            "In a team with professionals in their field",
    ]
    return (
        <div className="about">
            <h2 className="about__title">{title}</h2>
            <div className="about__block">
                <h3 className="about__block__content">{content[0]}</h3>
                <h3 className="about__block__content">{content[1]}</h3>
            </div>
            <div className="about__block">
                <h3 className="about__block__content">{content[2]}</h3>
                <h3 className="about__block__content">{content[3]}</h3>
            </div>
            <div className="about__block">
                <h3 className="about__block__content">{content[4]}</h3>
                <h3 className="about__block__content">{content[5]}</h3>
            </div>
        </div>
    )
}

export default AboutJs