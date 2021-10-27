import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GA/MyProfile.css';
import belle from '../../images/ma_honey_belle_b_vicencio.jpg'

function MyAccount() {
    return (
        <div className="myprofile-wrapper">
            <div className="myprofile-name">
                <h1>USER PROFILE</h1>
            </div>
            <div className="myprofile-container">
                <div className="myprofile-contents">
                    <div className="student-myprofile-pic">
                        <img src={belle} />
                    </div>
                    <div className="myprofile-student-name">
                        <h1>Ma. Honey Belle B. Vicencio</h1>
                    </div>
                    <div className="myprofile-user-details">
                        <p>10098731</p>
                        <p>Female</p>
                        <p>Sampaloc, Manila</p>
                        <p>mhbvicencio@national-u.edu.ph</p>
                        <p>Guidance Coordinator</p>
                    </div>
                    <div className="myprofile-edit-btn">
                        <Link to="/myaccount/edit">
                            <button>Edit Profile</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount