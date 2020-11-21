import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Students3() {
    return (
    <div className = 'students--main-container'>
        <h1>Students</h1>
        <div className = 'students--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-classes/student-attendance-main/students-date-search'
            >
                Date Search
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-classes/student-attendance-main/students-class-summary'
            >
                Class Summary
            </Button>
        </div>
    </div>
    );
}

export default Students3;
