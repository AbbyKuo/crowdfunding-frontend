import React from 'react';
import './Hero.css';
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate();

    const handleAboutUs = () => {
        navigate('/about');
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Welcome to BookWish</h1>
                <p>Empowering communities through the gift of books.</p>
                <Button
                    label="Learn More About Us" // Button text
                    onClick={handleAboutUs} // Navigation handler
                    variant="primary" // Use 'primary' styling
                />
            </div>
        </div>
    );
}

export default Hero;