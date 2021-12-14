import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from './Vector.svg';
import icon2 from './Vector-2.svg';
import icon3 from './Vector-3.svg';
import './link.scss';

const Links = () => {
    return (
        <ul className='link'>
            <li className='link__items'>
                <h4 className='link__title'>Company Info</h4>
                <Link className='link__link' to='#'>About Us</Link>
                <Link className='link__link' to='#'>Carrier</Link>
                <Link className='link__link' to='#'>We are hiring</Link>
                <Link className='link__link' to='#'>Blog</Link>
            </li>
            <li className='link__items'>
                <h4 className='link__title'>Legal</h4>
                <Link className='link__link' to='#'>About Us</Link>
                <Link className='link__link' to='#'>Carrier</Link>
                <Link className='link__link' to='#'>We are hiring</Link>
                <Link className='link__link' to='#'>Blog</Link>
            </li>
            <li className='link__items'>
                <h4 className='link__title'>Features</h4>
                <Link className='link__link' to='#'>Business Marketing</Link>
                <Link className='link__link' to='#'>User Analytic</Link>
                <Link className='link__link' to='#'>Live Chat</Link>
                <Link className='link__link' to='#'>Unlimited Support</Link>
            </li>
            <li className='link__items'>
                <h4 className='link__title'>Resources</h4>
                <Link className='link__link' to='#'>IOS & Android</Link>
                <Link className='link__link' to='#'>Watch a Demo</Link>
                <Link className='link__link' to='#'>Customers</Link>
                <Link className='link__link' to='#'>API</Link>
            </li>
            <li className='link__items'>
                <h4 className='link__title'>Get In Touch</h4>
                <Link className='link__link' to='#'><img className='link__icon' src={icon1} alt='telephone-icon'/>(480) 555-0103</Link>
                <Link className='link__link' to='#'><img className='link__icon' src={icon2} alt='addres-icon'/>4517 Washington Ave.</Link>
                <Link className='link__link' to='#'><img className='link__icon' src={icon3} alt='email-icon'/>debra.holt@example.com</Link>
            </li>
        </ul>
    )
}

export default Links;