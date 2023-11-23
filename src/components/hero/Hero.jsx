import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>

                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt='hand icon'></img>
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='arrow icon' />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt='hero image' />
            </div>
        </div>
        
    )
}

export default Hero