import React, { useState } from 'react';
import '../css/EditProfile.css';
import { Link, useHistory } from 'react-router-dom'
import shia from '../images/shia.jpg'
import PopUp from '../components/PopUp';

function EditProfile() {

    const [isOpen, setIsOpen] = useState(false);


    let history = useHistory();
    const togglePopup = () => {
        setIsOpen(!isOpen);
        // history.push('/profile')
    }



    return (
        <div className="editprofile-wrapper">
            <div className="editprofile-name">
                <h1>EDIT PROFILE</h1>
            </div>
            <div className="editprofile-container">
                <div className="editprofile-contents">
                    <div className="student-editprofile-pic">
                        <img src={shia} />
                    </div>
                    <div className="editprofile-student-name">
                        <h2>Student No.:</h2>
                        <input type="text" placeholder="Khrysshia Leighn D. Domingo" />
                        <h2>Full Name:</h2>
                        <input type="text" placeholder="2018375010" />
                        <h2>Gender:</h2>
                        <input type="text" placeholder="Female" />
                        <h2>Address:</h2>
                        <input type="text" placeholder="domingokd@students.national-u.edu.ph" />
                        <h2>Email:</h2>
                        <input type="text" placeholder="Khrysshia Leighn D. Domingo" />
                        <h2>College:</h2>
                        <select>
                            <option>Select type</option>
                            <option>College of Allied health</option>
                            <option>College of Architecture</option>
                            <option>College of Business and Accountancy</option>
                            <option>College of Computing and Information Technology</option>
                            <option>College of Dentistry</option>
                            <option>College of Education, Arts, and Sciences</option>
                            <option>College of Engineering</option>
                            <option>College of Tourism and Hospitality Management</option>
                        </select>
                        <h2>Password:</h2>
                        <input type="password" placeholder="Khrysshia Leighn D. Domingo" />
                        <h2>Confirm Password:</h2>
                        <input type="password" placeholder="Khrysshia Leighn D. Domingo" />
                    </div>
                    <div className="editprofile-btns">
                        <div className="editprofile-cancel">
                            <Link to="/profile">
                                <button>Cancel</button>
                            </Link>
                        </div>
                        <div className="editprofile-edit-btn">

                            <button onClick={togglePopup}>Save</button>

                        </div>

                    </div>
                </div>
            </div>
            {isOpen && <PopUp
                content={<>
                    <div className="popup-container">
                        <div className="popup-header"></div>
                        <div className="popup-content">
                            <p>Profile Succesfully Changed!
                            </p>
                        </div>

                    </div>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default EditProfile