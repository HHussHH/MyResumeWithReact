import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import "./burgerMenu.scss"

const BurgerMenu = () => {
    return (
        <div className="burgerMenu">
            <div className="container">
                <div className="burgerMenu__btn-systeam">
                    <button className='burgerMenu__btn'><HiOutlineMenuAlt3 size={40} /></button>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu