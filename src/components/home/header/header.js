import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Indicorp.svg';
import './header.scss'


const Header = () => {

    const [burger, setBurger] = useState(false)

    return (
        <div className={burger ? 'header header__active' : 'header'}>
            <div className='container'>
                <Link className='header__logo' to='#'><img src={Logo} alt='logo'/></Link>
                <ul className='header__nav nav'>
                    <li className='nav__item'><Link className='nav__link' onClick={() => setBurger(!burger)} to='#'>Home</Link></li>
                    <li className='nav__item'><Link className='nav__link' onClick={() => setBurger(!burger)} to='#'>Product</Link></li>
                    <li className='nav__item'><Link className='nav__link' onClick={() => setBurger(!burger)} to='#'>Pricing</Link></li>
                    <li className='nav__item'><Link className='nav__link' onClick={() => setBurger(!burger)} to='#'>Contact</Link></li>
                </ul>
                <div className='burger' onClick={() => setBurger(!burger)}></div>
            </div>
        </div>
    )
}

export default Header;