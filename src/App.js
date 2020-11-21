import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import Faculty from './components/pages/Faculty';
import Faculty1 from './components/pages/Faculty1';
import Faculty2 from './components/pages/Faculty2';
import Faculty3 from './components/pages/Faculty3';
import Faculty4 from './components/pages/Faculty4';
import Faculty5 from './components/pages/Faculty5';
import FacultyApprovals from './components/pages/FacultyApprovals';
import FacultyClassSummary from './components/pages/FacultyClassSummary';
import FacultyDateSummary from './components/pages/FacultyDateSummary';
import FacultyStudentSummary from './components/pages/FacultyStudentSummary';
import GeneratePassString from './components/pages/GeneratePassString';
import Students from './components/pages/Students';
import Students1 from './components/pages/Students1';
import Students2 from './components/pages/Students2';
import Students3 from './components/pages/Students3';
import Students4 from './components/pages/Students4';
import InputPassString from './components/pages/InputPassString';
import StudentClassSummary from './components/pages/StudentClassSummary';
import StudentDateSummary from './components/pages/StudentDateSummary';
import StudentsApprovals from './components/pages/StudentApprovals';
import StudentsRequests from './components/pages/StudentRequests';

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
      <Route path = '/' exact component = {Home} />
        <Route path = '/log-in' component = {LogIn} />
        <Route path = '/sign-up' component = {SignUp} />        
        <Route exact path = '/students-home' component = {Students} />
        <Route exact path = '/students-home/student-attendance-requests-approvals' component = {Students1} />
        <Route exact path = '/students-home/student-attendance-requests-approvals/student-approvals' 
                component = {StudentsApprovals}/>   
        <Route exact path = '/students-home/student-attendance-requests-approvals/student-requests' 
                component = {StudentsRequests}/> 
        <Route exact path = '/students-home/input-pass-string' 
                component = {InputPassString} />
        <Route exact path = '/students-home/student-classes' 
                component = {Students2}/>         
        <Route exact path = '/students-home/student-classes/student-attendance-main' 
                component = {Students3}/>
        <Route exact path = '/students-home/student-classes/student-attendance-main/students-date-search' 
                component = {Students4}/>
        <Route exact path = '/students-home/student-classes/student-attendance-main/students-class-summary' 
                component = {StudentClassSummary}/>
        <Route exact path = '/students-home/student-classes/student-attendance-main/students-date-search/students-date-summary' 
                component = {StudentDateSummary} />
        <Route exact path = '/faculty-home' 
                component = {Faculty} />         
        <Route exact path = '/faculty-home/faculty-attendance-approvals' 
                component = {FacultyApprovals}/>     
        <Route exact path = '/faculty-home/faculty-pass-string' 
                component = {Faculty1}/>         
        <Route exact path = '/faculty-home/faculty-pass-string/generate-pass-string' 
                component = {GeneratePassString}/>   
        <Route exact path = '/faculty-home/faculty-classes' 
                component = {Faculty2}/>
        <Route exact path = '/faculty-home/faculty-classes/faculty-attendance-dashboard' 
                component = {Faculty3}/>
        <Route exact path = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-student-search' 
                component = {Faculty4}/>
        <Route exact path = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-student-search/faculty-student-summary' 
                component = {FacultyStudentSummary}/>
        <Route exact path = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-date-search' 
                component = {Faculty5}/>
        <Route exact path = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-date-search/faculty-date-summary' 
                component = {FacultyDateSummary}/>
        <Route exact path = '/faculty-home/faculty-classes/faculty-attendance-dashboard/faculty-class-summary' 
                component = {FacultyClassSummary}/>
      </Switch>
    </Router>
  </>
  );
}

export default App;
