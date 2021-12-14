import React from 'react';
import icon1 from './Vector.svg';
import icon2 from './Vector-1.svg';
import icon3 from './Vector-2.svg';
import icon4 from './Vector-3.svg';
import icon5 from './Vector-4.svg';
import icon6 from './Vector-5.svg';
import './company.scss';

const Company = () => {

    const formHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='company'>
            <div className='company__block'>
                <ul className='company__items container'>
                    <li className='company__item'>
                        <img className='company__img' src={icon1} alt='icon-company'/>
                    </li>
                    <li className='company__item'>
                        <img className='company__img' src={icon2} alt='icon-company'/>
                    </li>
                    <li className='company__item'>
                        <img className='company__img' src={icon3} alt='icon-company'/>
                    </li>
                    <li className='company__item'>
                        <img className='company__img' src={icon4} alt='icon-company'/>
                    </li>
                    <li className='company__item'>
                        <img className='company__img' src={icon5} alt='icon-company'/>
                    </li>
                    <li className='company__item'>
                        <img className='company__img' src={icon6} alt='icon-company'/>
                    </li>
                </ul>
                <form className='company__form' onSubmit={formHandler}>
                    <h3 className='company__title'>Subscribe For Latest Newsletter</h3>
                    <div className='company__subscribe'>
                        <label><input className='company__input' type='email' required placeholder='Your Email'/></label>
                        <button className='btn company__btn '>Subscribe</button>
                    </div>
                </form>
            </div>
            <div className='company__footer'></div>
        </div>
    )
}

export default Company;