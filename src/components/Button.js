/**This is based off of Button.js from https://github.com/briancodex/react-website-v1.git**/
import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    linkDestination
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

    return (
        <Link to= {linkDestination} className = "btn-mobile">
            <button
            className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}
            >
                {children}
            </button>
        </Link>
    );
};
