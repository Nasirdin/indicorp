import React from 'react';
import img from './cover.jpg';
import icon1 from './icon.svg';
import icon2 from './icon2.svg';
import './service.scss';

const Service = () => {
    return (
        <div className='service'>
            <div className='container'>
                <h2 className='service__title title'>We are providing best business service.</h2>
                <p className='service_subtitle subtitle'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <div className='service__block'>
                    <div className='service__imgBlock'>
                        <img className='service__img' src={img} alt='service-img'/>
                    </div>
                    <div className='service__content content '>
                        <h2 className='content__title title'>Most trusted in our field</h2>
                        <p className='content__subtitle subtitle'>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                        <ul className='content__items'>
                            <li className='content__item'>
                                <img className='content__icon' src={icon1} alt='icon'/>
                                <div>
                                    <h3 className='content__tit'>the quick fox jumps over the lazy dog</h3>
                                    <p className='content__csubtitle'>Things on a very small scale ...</p>
                                </div>
                            </li>
                            <li className='content__item'>
                                <img className='content__icon' src={icon2} alt='icon'/>
                                <div>
                                    <h3 className='content__tit'>the quick fox jumps over the lazy dog</h3>
                                    <p className='content__csubtitle'>Things on a very small scale ...</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;