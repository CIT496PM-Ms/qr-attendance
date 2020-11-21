import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Students1() {
    return (
    <div className='students--main-container'>
        <h1>Students</h1>
        <p>Attendance Requests and Approvals</p>
        <div className='students--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-attendance-requests-approvals/student-approvals'
            >
                Approvals
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-attendance-requests-approvals/student-requests'
            >
                Requests
            </Button>
        </div>
    </div>
    );
}

export default Students1;
