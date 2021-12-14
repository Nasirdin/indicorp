import React from 'react';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import icon4 from './icon4.svg';
import './choose.scss'

const Choose = () => {
    return (
        <div className='choose'>
            <div className='container'>
                <h2 className='choose__title title'>WHY CHOOSE US</h2>
                <p className='choose__subtitle subtitle'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <ul className='choose__cards'>
                    <li className='choose__card'>
                        <img className='choose__icon' src={icon1} alt='icon'></img>
                        <h2 className='choose__number'>3k</h2>
                        <p className='choose__text'>CASES DONE</p>
                    </li>
                    <li className='choose__card'>
                        <img className='choose__icon' src={icon2} alt='icon'></img>
                        <h2 className='choose__number'>45</h2>
                        <p className='choose__text'>HAPPY CUSTOMERS</p>
                    </li>
                    <li className='choose__card'>
                        <img className='choose__icon' src={icon3} alt='icon'></img>
                        <h2 className='choose__number'>12+</h2>
                        <p className='choose__text'>AWARD WINNING</p>
                    </li>
                    <li className='choose__card'>
                        <img className='choose__icon' src={icon4} alt='icon'></img>
                        <h2 className='choose__number'>1.5k</h2>
                        <p className='choose__text'>CASES DONE</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Choose;