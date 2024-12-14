import React from 'react';
import './Hero.css';
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Hero = ({ title, subtitle, buttonLabel, buttonLink }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(buttonLink);
    };

    return (
        <div className="hero-container">
            <div className="hero-background"></div>
            <div className="hero-content">
                <h1>{title}</h1>   
                <p>{subtitle}</p>
                {buttonLabel && buttonLink && (
                    <Button
                        label={buttonLabel}
                        onClick={handleButtonClick}
                        variant="primary"
                    />
                )}
            </div>
        </div>
    );
}

export default Hero;