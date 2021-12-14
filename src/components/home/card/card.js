import React from 'react';
import Icon1 from './icon1.svg';
import Icon2 from './icon2.svg';
import Icon3 from './icon3.svg';
import './card.scss'

const Card = () => {
    return (
        <div className='cards'>
            <div className='cards__card'>
                <img className='cards__icon' src={Icon1} alt='icon'/>
                <h2 className='cards__title'>Digital Marketing</h2>
                <p className='cards__text'>We focus on ergonomics and meeting you where you work. </p>
            </div>
            <div className='cards__card'>
                <img className='cards__icon' src={Icon2} alt='icon'/>
                <h2 className='cards__title'>National top 50 firms</h2>
                <p className='cards__text'>Just type what's on your mind and we'll get you there.</p>
            </div>
            <div className='cards__card cards__card_blue'>
                <img className='cards__icon' src={Icon3} alt='icon'/>
                <h2 className='cards__title cards__text_white'>Digital Marketing</h2>
                <p className='cards__text cards__text_white'>the quick fox jumps over the lazy dog</p>
            </div>
        </div>
    )
}

export default Card;