import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Students4() {
    return (
    <div className = 'students--main-container'>
        <h1>Students</h1>
        <div className = 'students--main-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                linkDestination = '/students-home/student-classes/student-attendance-main/students-date-search/students-date-summary'
            >
                Date Summary
            </Button>
        </div>
    </div>
    );
}

export default Students4;
