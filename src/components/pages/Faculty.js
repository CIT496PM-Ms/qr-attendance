import React from 'react';
import { Button } from '../Button';
import '../../App.css';
import './Faculty.css';

function Faculty() {
    return (
    <div className = 'faculty--main-container'>
        <h1>Faculty</h1>
        <div className = 'faculty--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/faculty-home/faculty-attendance-approvals'
            >
                Approvals
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/faculty-home/faculty-pass-string'
            >
                Generate Pass-String
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/faculty-home/faculty-classes'
            >
                Check Attendance
            </Button>
        </div>
    </div>
    );
}

export default Faculty;
