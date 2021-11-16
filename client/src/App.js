import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Aboutus from './Pages/Aboutus';
import Chat from './Pages/Chatbot';
import Counseling from './Pages/Counseling';
// import Home from './Pages/Home';
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
import Chatbody from './components/chatbody/Chatbody';


//ga
import Navbar_ga from './components/GA/Navbar_ga'
import Header_ga from './components/GA/Header_ga'
import MainHome from './Pages/GA/MainHome'
import PendingRequest from './Pages/GA/PendingRequest'
import ScheduledRequest from './Pages/GA/ScheduledRequest'
import Records from './Pages/GA/Records'
import MyProfile from './Pages/GA/MyProfile'
import Announcement from './Pages/GA/Announcement';
import Messages from './Pages/GA/Messages'
import EditProfile_ga from './Pages/GA/EditProfile_ga';



//guidance director
import Header_admin from './components/Admin/Header_admin'
import Navbar_admin from './components/Admin/Navbar_admin'
import AccountManagement from './Pages/Admin/AccountManagement'
import Dashboard from './Pages/Admin/Dashboard';
import AdminHome from './Pages/Admin/AdminHome';
import ActivityLogs from './Pages/Admin/ActivityLogs'
import ViewPending from './Pages/GA/ViewPending';
import AddAccount from './components/Admin/AddGA/AddAccount';
import Reports from './Pages/Admin/Reports';
import AnnouncementGD from './Pages/Admin/AnnouncementGD';
import GoodMoralReq from './Pages/Services/GoodMoralReq';
import GoodMoralPayment from './Pages/Services/GoodMoralPayments';
import CounselingConsent from './Pages/CounselingConsent';

import EditProfile from './Pages/EditProfile'
import COAH from './Pages/Admin/CollegeReport/COAH';
import Architecture from './Pages/Admin/CollegeReport/Architecture';
import CBA from './Pages/Admin/CollegeReport/CBA';
import CCIT from './Pages/Admin/CollegeReport/CCIT'
import COD from './Pages/Admin/CollegeReport/COD'
import CEAS from './Pages/Admin/CollegeReport/CEAS'
import CE from './Pages/Admin/CollegeReport/CE'
import CTHM from './Pages/Admin/CollegeReport/CTHM'
import Account from './Pages/Admin/Account';
import AccountEdit from './Pages/Admin/AccountEdit';

import MyAccount from './Pages/GC/MyAccount';
import EditMyAccount from './Pages/GC/EditMyAccount';
import SubmittedSii from './Pages/Admin/TotalForms/SubmittedSii';
import SubmittedGrad from './Pages/Admin/TotalForms/SubmittedGrad';
import Counselled from './Pages/Admin/TotalForms/Counselled';
import FirstTimer from './Pages/Admin/TotalForms/FirstTimer';
import ViewSii from './Pages/Admin/TotalForms/ViewSii';
import ViewGradForm from './Pages/Admin/TotalForms/ViewGradForm';
import ViewFirstTimer from './Pages/Admin/TotalForms/ViewFirstTimer';


import TermsAndCondition from './Pages/Terms';


const isLoggedIn = () => {
  return localStorage.getItem('TOKEN_KEY') != null;
};

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
        <Route path="/services/goodmoral/request" exact component={GoodMoralReq} />
        <Route path="/services/goodmoral" exact component={GoodMoral} />
        <Route path="/services/goodmoral/payment" exact component={GoodMoralPayment} />
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


        {/* Admin */}
        <Route exact path="/mainpage" component={AdminHome} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/reports" component={Reports} />
        <Route exact path="/reports/alliedhealth" component={COAH} />
        <Route exact path="/reports/architecture" component={Architecture} />
        <Route exact path="/reports/accountancy" component={CBA} />
        <Route exact path="/reports/ccit" component={CCIT} />
        <Route exact path="/reports/dentistry" component={COD} />
        <Route exact path="/reports/ceas" component={CEAS} />
        <Route exact path="/reports/engineering" component={CE} />
        <Route exact path="/reports/tourism" component={CTHM} />

        <Route exact path="/dashboard/submittedsiiform" component={SubmittedSii} />
        <Route exact path="/dashboard/viewsubmittedsii" component={ViewSii} />
        <Route exact path="/dashboard/submittedgradform" component={SubmittedGrad} />
        <Route exact path="/dashboard/submittedgradform/viewgradform" component={ViewGradForm} />
        <Route exact path="/dashboard/counselled" component={Counselled} />
        <Route exact path="/dashboard/firsttimers" component={FirstTimer} />
        <Route exact path="/dashboard/firsttimers/view" component={ViewFirstTimer} />

        <Route exact path="/accountmanagement" component={AccountManagement} />
        <Route exact path="/announcements/view" component={AnnouncementGD} />
        <Route exact path="/accountmanagement/createuser" component={AddAccount} />
        <Route exact path="/activitylogs" component={ActivityLogs} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/edit" component={AccountEdit} />

        {/* coordinator */}
        <Route exact path="/mainpage" component={AdminHome} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route exact path="/reports" component={Reports} />
        <Route exact path="/reports/alliedhealth" component={COAH} />
        <Route exact path="/reports/architecture" component={Architecture} />
        <Route exact path="/reports/accountancy" component={CBA} />
        <Route exact path="/reports/ccit" component={CCIT} />
        <Route exact path="/reports/dentistry" component={COD} />
        <Route exact path="/reports/ceas" component={CEAS} />
        <Route exact path="/reports/engineering" component={CE} />
        <Route exact path="/reports/tourism" component={CTHM} />

        <Route exact path="/myaccount" component={MyAccount} />
        <Route exact path="/myaccount/edit" component={EditMyAccount} />

      </Switch>
    </Router>
  );
}

export default App;