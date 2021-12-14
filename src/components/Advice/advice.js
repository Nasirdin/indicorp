import React from 'react';
import img1 from './cover.jpg';
import img2 from './cover-1.jpg';
import img3 from './cover-2.jpg';
import img4 from './cover-3.jpg';
import './advice.scss';

const Advice = () => {
    return (
        <div className='advice'>
            <div className='container'>
                <h2 className='advice__title title'>Practice Advice</h2>
                <p className='advice__subtitle subtitle'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <ul className='advice__cards'>
                    <li className='advice__card'>
                        <h2 className='advice__cardTitle'>A single source of truth</h2>
                        <p className='advice__text'>Newton thought that light was made up of particles, but then it was discovered </p>
                        <img className='advice__img' src={img1} alt='card-img'></img>
                    </li>
                    <li className='advice__card'>
                        <h2 className='advice__cardTitle'>Fastest way to organize</h2>
                        <p className='advice__text'>“Quantum mechanics” is the description of the behaviour of matter</p>
                        <img className='advice__img' src={img2} alt='card-img'></img>
                    </li>
                    <li className='advice__card'>
                        <h2 className='advice__cardTitle'>Fastest way to take action</h2>
                        <p className='advice__text'>They describe a universe consisting of bodies moving</p>
                        <img className='advice__img' src={img3} alt='card-img'></img>
                    </li>
                    <li className='advice__card'>
                        <h2 className='advice__cardTitle'>Work better together</h2>
                        <p className='advice__text'>They finally obtained a consistent description of the behaviour </p>
                        <img className='advice__img' src={img4} alt='card-img'></img>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Advice;