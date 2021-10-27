import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import PopUpEditProfile_ga from '../../components/GA/PopUpEditProfile_ga';
import belle from '../../images/ma_honey_belle_b_vicencio.jpg'
import '../../css/GA/EditProfile_ga.css'


function EditMyAccount() {

    const [isOpen, setIsOpen] = useState(false);


    let history = useHistory();
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }



    return (
        <div className="editprofile_ga-wrapper">
            <div className="editprofile_ga-name">
                <h1>EDIT PROFILE</h1>
            </div>
            <div className="editprofile_ga-container">
                <div className="editprofile_ga-contents">
                    <div className="student-editprofile_ga-pic">
                        <img src={belle} />
                    </div>
                    <div className="editprofile_ga-student-name">
                        <h2>Faculty No.:</h2>
                        <input type="text" placeholder="Faculty No" />
                        <h2>Full Name:</h2>
                        <input type="text" placeholder="Ma. Honey Belle B. Vicencio" />
                        <h2>Gender:</h2>
                        <input type="text" placeholder="Femle" />
                        <h2>Address:</h2>
                        <input type="text" placeholder="mhbvicencio@national-u.edu.ph" />
                        <h2>Role:</h2>
                        <input type="text" placeholder="Guidance Coordinator" />
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
                        <input type="password" placeholder="Password" />
                        <h2>Confirm Password:</h2>
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="editprofile_ga-btns">
                        <div className="editprofile_ga-cancel">
                            <Link to="/myaccount">
                                <button>Cancel</button>
                            </Link>
                        </div>
                        <div className="editprofile_ga-edit-btn">

                            <button onClick={togglePopup}>Save</button>

                        </div>

                    </div>
                </div>
            </div>
            {isOpen && <PopUpEditProfile_ga
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

export default EditMyAccount