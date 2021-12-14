import React from 'react';
import Card from './card/card';
import Header from './header/header';

import './home.scss'

const Home = () => {

    return (
        <div className='home'>
            <Header/>
            <div className='container'>
                <div className='home__block'>
                    <div className='home__content'>
                        <h1 className='home__title'>empower your business</h1>
                        <p className='home__subtitle'>We know how large objects will act, but things on a small scale.</p>
                        <div className='home__btns'>
                            <button className='btn'>Get Quote Now</button>
                            <button className='btn btn_bgnone'> Learn More</button>
                        </div>
                    </div>
                    <Card/>
                </div>
            </div>
        </div>
    )
}

export default Home;