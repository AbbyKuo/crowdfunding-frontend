import React from 'react';
import './Hero.css';
import Button from './Button'
import { useNavigate } from 'react-router-dom'

// Using props to make the Hero page display in different pages

const Hero = ( { title, subtitle, image, buttonLabel, buttonLink } ) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(buttonLink); // Navigate to the specified link
    };

    return (
        <div className="hero-container">
            <div 
                className="hero-content"
                style={{ backgroundImage: `url(${image})` }} // Dynamic background
            >
                <h1>{title}</h1>   
                <p>{subtitle}</p>
                {buttonLabel && buttonLink && (
                    <Button
                    label={buttonLabel} // Button text
                    onClick={handleButtonClick} // Navigation handler
                    variant="primary" // Use 'primary' styling
                    />
                )}
            </div>
        </div>
    );
}

export default Hero;