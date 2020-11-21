import React from 'react';
import { Button } from '../Button';
import '../../App.css';

function Faculty5() {
    return (
    <div className = 'faculty--main-container'>
        <h1>Faculty</h1>
        <div className = 'faculty--main-btns'>
            <Button
                className = 'btns'
                buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'
                linkDestination = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-date-search/faculty-date-summary'
            >
                Date Summary
            </Button>
        </div>
    </div>
    );
}

export default Faculty5;
