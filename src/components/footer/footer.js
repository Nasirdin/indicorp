import React from 'react';
import { Link } from 'react-router-dom';
import Links from './link/link';
import icon1 from './Vector.svg';
import icon2 from './Vector-1.svg';
import icon3 from './Vector-2.svg';
import icon4 from './Vector-3.svg';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <Links/>
            </div>
            <div className='footer__end'>
                <div className='container'>
                    <p className='text'>Made With Love By Figmaland All Right Reserved </p>
                    <ul className='footer__items'>
                        <li className='footer__item'><Link className='footer__link' to='#'><img src={icon1} alt='social-icon'/></Link></li>
                        <li className='footer__item'><Link className='footer__link' to='#'><img src={icon2} alt='social-icon'/></Link></li>
                        <li className='footer__item'><Link className='footer__link' to='#'><img src={icon3} alt='social-icon'/></Link></li>
                        <li className='footer__item'><Link className='footer__link' to='#'><img src={icon4} alt='social-icon'/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;