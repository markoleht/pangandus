import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Styles/HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/public/videos/video-2.mp4" autoPlay loop muted />
            <h1>Leht-Rünkaru pank</h1>
            <p> The solution and the root of all your problems</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' where="signup" buttonSize='btn--large'>
                    Join us
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    Check out our interest rates.
                    <i className="far fa-play-circle" />
                </Button>
            </div>            
        </div>
    )
}

export default HeroSection
