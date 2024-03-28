import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Welcome to Rent-A-Book !</h2>
            </div>
            <div className="hero-right">
                <button className='hero-righ-btn'>Rent Now !</button>
            </div>
        </div>
    );
}

export default Hero