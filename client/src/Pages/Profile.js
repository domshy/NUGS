import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/Profile.css';
import { Link } from 'react-router-dom'
import shia from '../images/shia.jpg'

import Header from '../components/Header'
import Navbar from '../components/Navbar';

function Profile() {

const [student_number, setStudentNumber] = useState("");
const [fullname, setFullname] = useState("");
const [student_gender, setStudentGender] = useState("");
const [contact_no, setContacno] = useState("");
const [email, setEmail] = useState("");
const [college, setCollege] = useState("");

const [profiledetails, setProfileDetails] = useState([]);

    return (
        <div className="profile-wrapper">
            <Header />
            <Navbar />
            <div className="profile-name">
                <h1>USER PROFILE</h1>
            </div>
            <div className="profile-container">
          
            </div>
        </div>
    )
}

export default Profile