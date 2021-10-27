import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GA/MyProfile.css';
import archi from '../../images/archieval_s_salvador.jpg'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'

function Profile() {
    return (
        <div className="myprofile-wrapper">
            <Header />
            <Navbar />
            <div className="myprofile-content">
                <div className="myprofile-name">
                    <h1>USER PROFILE</h1>
                </div>
            </div>

        </div>
    )
}

export default Profile