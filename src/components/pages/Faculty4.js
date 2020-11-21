import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Faculty4() {
    return (
    <div className = 'faculty--main-container'>
        <h1>Faculty</h1>
        <div className = 'faculty--main-btns'>
            <Button
                className = 'btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                linkDestination = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-student-search/faculty-student-summary'
            >
                Student Summary
            </Button>
        </div>
    </div>
    );
}

export default Faculty4;
