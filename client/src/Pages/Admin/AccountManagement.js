import React, { useState } from 'react'
import '../../css/Admin/AccountManagement.css'
import { useHistory } from 'react-router'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { GuidanceMembers } from '../../components/Admin/GuidanceMembers'
import AddUserPopUp from '../../components/Admin/AddUserPopUp'

export default function AccountManagement() {


    const [isOpen, setIsOpen] = useState(false);


    let history = useHistory();
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }



    return (
        <div className="account-management-wrapper">
            <div className="account-management-name">
                <h1>Account Management</h1></div>
            <div className="account-management-container">

                <div className="adding-users">
                    <div className="create-user-header">
                        <span>Add User</span>
                    </div>
                    <div className="create-user-forms">
                        <div className="am-facultynumber">
                            <span id="am-faculty-id-label">&nbsp;&nbsp;&nbsp;*Faculty ID: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                                placeholder="Faculty ID"
                                name="am_facultyid" />
                        </div>
                        <div className="am-fullname">
                            <span id="am-fullname-label">&nbsp;&nbsp;&nbsp;*FullName: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                                placeholder="FullName"
                            />
                        </div>
                        <div className="am-gender">
                            <span id="am-gender-label">&nbsp;&nbsp;&nbsp;*Gender: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select id="guidance_gender">
                                <option>Select Gender</option>
                                <option>Femle</option>
                                <option>Male</option>
                            </select>
                        </div>
                        <div className="am-contactno">
                            <span id="am-contact-label">&nbsp;&nbsp;&nbsp;*Contact No: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                                placeholder="Contact No."
                            />
                        </div>
                        <div className="am-address">
                            <span id="am-address-label">&nbsp;&nbsp;&nbsp;*Address: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                                placeholder="Address"
                            />
                        </div>
                        <div className="am-college">
                            <span id="am-college-label">&nbsp;&nbsp;&nbsp;*College: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select id="guidance_college">
                                <option>Select College</option>
                                <option>College of Allied health</option>
                                <option>College of Architecture</option>
                                <option>College of Business and Accountancy</option>
                                <option>College of Computing and Information Technology</option>
                                <option>College of Dentistry</option>
                                <option>College of Education, Arts, and Sciences</option>
                                <option>College of Engineering</option>
                                <option>College of Tourism and Hospitality Management</option>
                            </select>
                        </div>
                        <div className="am-email">

                            <span id="am-email-label">&nbsp;&nbsp;&nbsp;*Email: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className="am-password">
                            <span id="am-password-label">&nbsp;&nbsp;&nbsp;*Password: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="am-cnpassword">
                            <span id="am-cnpassword-label">&nbsp;&nbsp;&nbsp;*Confirm  <br /> &nbsp;&nbsp;&nbsp;Password: </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="create-user-btn">
                            <button onClick={togglePopup}>Create</button>
                        </div>
                    </div>
                    <div className="am-spacer">&nbsp;</div>

                </div>
                <div className="view-user-created">
                    <div className="view-user-header">
                        <h2>Guidance Department</h2>
                    </div>
                    <div className="view-user-members">
                        <ul id="view-members-guidance">
                            {GuidanceMembers.map((members, index) => {
                                return (
                                    <li key={members}>
                                        <div id="member-img"><img src={members.image} /></div>
                                        <span id="member-name">{members.gname}</span>
                                        <br />
                                        <span id="member-grole">{members.grole}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            {isOpen && <AddUserPopUp
                content={<>
                    <div className="popup-container">
                        <div className="popup-header"></div>
                        <div className="popup-content">
                            <p> Succesfully Added!
                            </p>
                        </div>

                    </div>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}