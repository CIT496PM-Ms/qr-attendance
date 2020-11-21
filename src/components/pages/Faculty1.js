import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Faculty1() {
    return (
    <div className = 'faculty--main-container'>
        <h1>Faculty</h1>
        <div className = 'faculty--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/faculty-home/faculty-pass-string/generate-pass-string'
            >
                Generate Pass-String
            </Button>
        </div>
    </div>
    );
}

export default Faculty1;
