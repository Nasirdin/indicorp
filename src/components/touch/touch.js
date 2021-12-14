import React from 'react';
import icon1 from './Vector.svg';
import icon2 from './Vector-1.svg';
import icon3 from './Vector-2.svg';
import './touch.scss';

const Touch = () => {
    return (
        <div className='touch'>
            <div className='container'>
                <h2 className='touch__title title'>Get In Touch</h2>
                <p className='touch__subtitle subtitle'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <ul className='touch__cards'>
                    <li className='touch__card'>
                        <img className='touch__icon' src={icon1} alt='touch-icon'/>
                        <p className='touch__gmail'>georgia.young@example.com</p>
                        <p className='touch__gmail2'>georgia.young@ple.com</p>
                        <h3 className='touch__get'>Get Support</h3>
                        <button className='touch__btn'>Submit Request</button>
                    </li>
                    <li className='touch__card touch__card_black'>
                        <img className='touch__icon' src={icon2} alt='touch-icon'/>
                        <p className='touch__gmail'>georgia.young@example.com</p>
                        <p className='touch__gmail2'>georgia.young@ple.com</p>
                        <h3 className='touch__get'>Get Support</h3>
                        <button className='touch__btn'>Submit Request</button>
                    </li>
                    <li className='touch__card'>
                        <img className='touch__icon' src={icon3} alt='touch-icon'/>
                        <p className='touch__gmail'>georgia.young@example.com</p>
                        <p className='touch__gmail2'>georgia.young@ple.com</p>
                        <h3 className='touch__get'>Get Support</h3>
                        <button className='touch__btn'>Submit Request</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Touch;