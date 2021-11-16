import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Admin/Account.css';
import Header from '../../components/Admin/Header_admin'
import Navbar from '../../components/Admin/Navbar_admin'
import ansh from '../../images/ansherina_lhynne_c_bautista.jpg'

function Account() {
    return (
        <div className="myprofile1-wrapper">
            <Header />
            <Navbar />
            <div>
                <div className="myprofile1-name">
                    <h1>USER PROFILE</h1>
                </div>
                <div className="myprofile1-container">
                    <div className="myprofile1-contents">
                        <div className="student-myprofile1-pic">
                            <img src={ansh} />
                        </div>
                        <div className="myprofile1-student-name">
                            <h1>Ansherina Lhynne C. Bautista</h1>
                        </div>
                        <div className="myprofile1-user-details">
                            <p>10098731</p>
                            <p>Female</p>
                            <p>Sampaloc, Manila</p>
                            <p>ansbautista@national-u.edu.ph</p>
                            <p>Guidance Director</p>
                        </div>
                        <div className="myprofile1-edit-btn">
                            <Link to="/account/edit">
                                <button>Edit Profile</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account