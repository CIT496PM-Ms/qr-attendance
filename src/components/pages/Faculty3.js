import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Faculty3() {
    return (
    <div className = 'faculty--main-container'>
        <h1>Faculty</h1>
        <div className = 'faculty--main-btns'>
            <Button
                className = 'btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                linkDestination = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-student-search'
            >
                Student Search
            </Button>
            <Button
                className = 'btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                linkDestination = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-date-search'
            >
                Date Search
            </Button>
            <Button
                className = 'btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                linkDestination = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-class-summary'
            >
                Class Summary
            </Button>
        </div>
    </div>
    );
}

export default Faculty3;
