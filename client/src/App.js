import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Aboutus from './Pages/Aboutus';
import Chat from './Pages/Chatbot';
import Counseling from './Pages/Counseling';
import Landingpage from './Pages/LandingPage';
import Main from './Pages/Main';
import Profile from './Pages/Profile';
import Register from './Pages/Register';

import Services from './Pages/Services';
import Enrollment from './Pages/Services/Enrollment';
import GoodMoral from './Pages/Services/GoodMoral';
import Interview from './Pages/Services/Interview';
import InterviewForm from './Pages/Services/InterviewForm';
import ShiftingForm from './Pages/Services/ShiftingForm';
import GraduatingForm from './Pages/Services/GraduatingForm'
import CounselingForm from './Pages/CouselingForm'

import StopSchooling from './Pages/Services/StopSchooling';
import TransferringForm from './Pages/Services/TransferringForm';
import EnrollmentForm from './Pages/Services/EnrollmentForm';
import EditProfile from './Pages/EditProfile'
import Chatbody from './components/chatbody/Chatbody';



//ga
import MainHome from './Pages/GA/MainHome'
import PendingRequest from './Pages/GA/PendingRequest'
import ScheduledRequest from './Pages/GA/ScheduledRequest'
import Records from './Pages/GA/Records'
import MyProfile from './Pages/GA/MyProfile'
import Announcement from './Pages/GA/Announcement';
import Messages from './Pages/GA/Messages'
import EditProfile_ga from './Pages/GA/EditProfile_ga';
import ViewPending from './Pages/GA/ViewPending';
import GoodMoralReq from './Pages/Services/GoodMoralReq';
import CounselingConsent from './Pages/CounselingConsent';

//gd


import TermsAndCondition from './Pages/Terms';
import Home from './Pages/GD/Home';


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landingpage} />
        <Route path="/register" component={Register} />

        <Route path="/TermsAndCondition" component={TermsAndCondition} />

        {/* Student */}
        <Route path="/main" component={Main} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/goodmoral" exact component={GoodMoralReq} />
        <Route path="/services/goodmoral/request" exact component={GoodMoral} />
        <Route path="/services/studentenrollment" exact component={Enrollment} />
        <Route exact path="/enrollment/enrollmentstudentform" component={EnrollmentForm} />
        <Route path="/services/interview" exact component={Interview} />
        <Route exact path="/interview/requestinterview" component={InterviewForm} />

        <Route exact path="/interview/shiftingform" component={ShiftingForm} />
        <Route exact path="/interview/shiftingform" component={GraduatingForm} />
        <Route exact path="/interview/shiftingform" component={StopSchooling} />
        <Route exact path="/interview/shiftingform" component={TransferringForm} />

        <Route exact path="/counseling" component={Counseling} />
        <Route exact path="/counseling/consent" component={CounselingConsent} />
        <Route exact path="/counseling/counselingform" component={CounselingForm} />
        <Route exact path="/messages" component={Chat} />
        <Route exact path="/chats" component={Chatbody} />

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/editprofile" component={EditProfile} />


        {/* Guidance Associate */}
        <Route exact path="/mainhome" component={MainHome} />
        <Route exact path="/pendingrequests" component={PendingRequest} />
        <Route exact path="/pendingrequests/viewrequestdetails" component={ViewPending} />
        <Route exact path="/scheduledrequest" component={ScheduledRequest} />
        <Route exact path="/messages/inbox" component={Messages} />
        <Route exact path="/announcement" component={Announcement} />
        <Route exact path="/records" component={Records} />

        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/myprofile/edit" component={EditProfile_ga} />
        <Route exact path="/aboutus" component={Aboutus} />

        <Route exact path="/home" component={Home} />


      </Switch>
    </Router>
  );
}

export default App;