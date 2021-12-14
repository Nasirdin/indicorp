import React from 'react';
import './contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <h3 className='container'>
                <div className='contact__text'>
                    <h3 className='contact__title'>Consulting Agency For Your Business</h3>
                    <p className='contact__subtitle'>the quick fox jumps over the lazy dog</p>
                </div>
                <div className='contact__btnBlock'>
                    <button className='contact__btn btn'>Contact Us</button>
                </div>
            </h3>
        </div>
    )
}

export default Contact;