import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Faculty2() {
    return (
    <div className = 'faculty--main-container'>
        <h1>Faculty</h1>
        <p>Classes</p> 
        <div className = 'faculty--main-btns'>
            <Button
                className = 'btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                linkDestination = '/faculty-home/faculty-classes/faculty-attendance-dashboard'
            >
               Check Attendance
            </Button>
        </div>
    </div>
    );
}

export default Faculty2;
