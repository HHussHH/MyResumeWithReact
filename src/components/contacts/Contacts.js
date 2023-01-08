import "./contacts.scss"
import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsInstagram } from 'react-icons/bs';
const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__inner">
                <h2 className="contacts__title">Contacts</h2>
                <p className="contacts__content">Want to know more or just chat?<br />
                    You are welcome!</p>
                <button className="contacts__btn">Send message</button>
                <div className="contacts__icons">
                    <div className="contacts__icon"><BsTelegram size={40} /></div>
                    <div className="contacts__icon"><AiFillGithub size={40} /></div>
                    <div className="contacts__icon"><SlSocialVkontakte size={40} /></div>
                    <div className="contacts__icon"><BsInstagram size={40} /></div>

                </div>
                <div className="contacts__under-text">Like me on GitHub & Instagram</div>
            </div>
        </div>
    )
}

export default Contacts