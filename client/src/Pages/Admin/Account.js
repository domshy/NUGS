import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GA/MyProfile.css';
import ansh from '../../images/ansherina_lhynne_c_bautista.jpg'

function Account() {
    return (
        <div className="myprofile-wrapper">
            <div className="myprofile-name">
                <h1>USER PROFILE</h1>
            </div>
            <div className="myprofile-container">
                <div className="myprofile-contents">
                    <div className="student-myprofile-pic">
                        <img src={ansh} />
                    </div>
                    <div className="myprofile-student-name">
                        <h1>Ansherina Lhynne C. Bautista</h1>
                    </div>
                    <div className="myprofile-user-details">
                        <p>10098731</p>
                        <p>Female</p>
                        <p>Sampaloc, Manila</p>
                        <p>ansbautista@national-u.edu.ph</p>
                        <p>Guidance Director</p>
                    </div>
                    <div className="myprofile-edit-btn">
                        <Link to="/account/edit">
                            <button>Edit Profile</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account