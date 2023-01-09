import "./contacts.scss"
import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
const Contacts = ({ currentLang }) => {

    const title = currentLang === "ru" ? "Контакты" : "Contacts"
    const content = [
        currentLang === "ru" ? "Хотите узнать больше или просто поболтать?" : "Want to know more or just chat?",
        currentLang === "ru" ? "Буду ждать!" : "You are welcome!",]
    const btn = currentLang === "ru" ? "Отправить сообщение" : "Send message"
    const underText = currentLang === "ru" ? "Буду рад вашей оценки моего ГитХаба и Инстаграма" : "Like me on GitHub & Instagram"
    return (
        <div className="contacts">
            <div className="contacts__inner">
                <h2 className="contacts__title">{title}</h2>
                <p className="contacts__content">{content[0]}<br />
                    {content[1]}</p>
                <button className="contacts__btn">{btn}</button>
                <div className="contacts__icons">
                    <a href="https://t.me/Shikarnui_Chelovek" rel="noreferrer" target="_blank" className="contacts__icon"><BsTelegram size={40} /></a>
                    <a href="https://github.com/HHussHH" rel="noreferrer" target="_blank" className="contacts__icon"><AiFillGithub size={40} /></a>
                    <a href="https://vk.com/top_sportorg" rel="noreferrer" target="_blank" className="contacts__icon"><SlSocialVkontakte size={40} /></a>
                    <a href="https://instagram.com" rel="noreferrer" target="_blank" className="contacts__icon"><BsInstagram size={40} /></a>

                </div>
                <div className="contacts__under-text">{underText}</div>
            </div>
        </div>
    )
}

export default Contacts