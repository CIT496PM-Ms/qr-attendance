import React from 'react';
import { Button } from '../Button';
import '../../App.css';
import './Students.css';

function Students() {
    return (
    <div className='students--main-container'>
        <h1>Students</h1>
        <div className='students--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-attendance-requests-approvals'
            >
                Approvals/Requests
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/input-pass-string'
            >
                Input Pass-String
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-classes'
            >
                Attendance
            </Button>
        </div>
    </div>
    );
}

export default Students;
