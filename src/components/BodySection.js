/**This is based off of HeroSection.js from https://github.com/briancodex/react-website-v1.git**/
import React from 'react';
import { Button } from './Button';
import '../App.css';
import './BodySection.css';

function BodySection() {
    return (
        <div className='body-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>ATTENDANCE</h1>
            <div className='body-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    linkDestination = '/faculty-home'
                >
                    Faculty
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    linkDestination = '/students-home'
                >
                    Students
                </Button>
            </div>
        </div>
    );
}

export default BodySection;
