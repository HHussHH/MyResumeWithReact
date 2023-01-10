import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import "./burgerMenu.scss"

const BurgerMenu = ({ setMenu, menu }) => {

    return (
        <div className="burgerMenu">
            <div className="container">
                <div className="burgerMenu__btn-systeam">
                    <button className='burgerMenu__btn' onClick={() => setMenu(!menu)}><HiOutlineMenuAlt3 size={40} /></button>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu