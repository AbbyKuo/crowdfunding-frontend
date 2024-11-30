import React from 'react';
import './Button.css';

const Button = ({
    label = "Click me",    // Default text
    onClick,              // Function to execute on click
    type = "button",      // Default type
    variant = "primary",  // 'primary' or 'secondary'
    disabled = false,     // Disabled state
}) => {
    const buttonClass = disabled
        ? "button button-disabled"
        : `button button-${variant}`;

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
        >
            {label}
        </button>
    );
};

export default Button;

