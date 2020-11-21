import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Students2() {
    return (
    <div className = 'students--main-container'>
        <h1>Students</h1>
        <p>Classes</p>
        <div className = 'students--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-classes/student-attendance-main'
            >
                Check Attendance
            </Button>
        </div>
    </div>
    );
}

export default Students2;
