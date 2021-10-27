import React from 'react'
import '../../../css/Admin/College/COAH.css'
import { Link } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'


//images
import MostUsedServices from '../../../images/services overall/services (most used).png'
import ServicePie from '../../../images/per college (services)/services (business and accountancy).png'
import MaritalStatus from '../../../images/per college (services)/sii marital (business and accountancy).png'
import Shifting from '../../../images/overall/rate of shifting.png'
import SmartChat from '../../../images/smartchat/smartchat gaano karami gumamit ng smartchat this sem.png'

function CE() {
    return (
        <div className="coah-wrapper">
            <div className="coah-container">
                <div className="coah-header">
                    <div className="coah-back">
                        <Link to="/reports">
                            <IoChevronBackOutline id="back-icon" />
                        </Link>
                    </div>
                    <div className="coah-title">
                        <h2>College of Engineering</h2>
                    </div>
                </div>
                <div className="total-college">
                    <div className="total-college-cards">
                        <div className="total-college-pending">
                            <div className="dashboardlist-cards">
                            <ul id="dashboardlist-items">
                                    <li><a href="/pendingrequests"><div className="total-pending">
                                        <h3>5</h3>
                                        <span>pending requests</span>
                                        <br />
                                        <span id="pending-time"><BiTimeFive /> updated: 11:00am </span>
                                    </div></a>
                                    </li>
                                    <li><a href="/dashboard/submittedsiiform"><div className="total-enrollees">
                                        <h3>100</h3>
                                        <span>submitted SII Form</span>
                                        <span id="total-sii"><BiTimeFive /> updated: 4:00pm </span>
                                    </div></a>
                                    </li>
                                    <li><a href="/dashboard/submittedgradform"><div className="total-grad">
                                        <h3>31</h3>
                                        <span>Submitted Graduating Form</span>
                                        <br />
                                        <span id="total-gradform"><BiTimeFive /> updated: 11:00am </span>
                                    </div></a>
                                    </li>
                                    <li><a href="/dashboard/counselled"><div className="total-counselled">
                                        <h3>13</h3>
                                        <span>Counselled</span>
                                        <br />
                                        <span id="time-counsel"><BiTimeFive /> updated: 3:30pm </span>
                                    </div></a>
                                    </li>
                                    <li><a href="/dashboard/firsttimers"><div className="total-firsttimers">
                                        <h3>49</h3>
                                        <span>First Timer</span>
                                        <br />
                                        <span id="time-counsel"><BiTimeFive /> updated: 3:00pm </span>
                                    </div></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="coah-overview">
                    <div className="coah-mostservice-graph">
                        <img src={MostUsedServices} />
                    </div>
                    <div className="coah-mostservice-graph2">
                        <img src={ServicePie} />
                    </div>
                </div>

                <div className="coah-secondbar">
                    <div className="coah-marital-status">
                        <img src={MaritalStatus} />
                    </div>
                    <div className="coah-shifting-reason">
                        <img src={Shifting} />
                    </div>
                </div>

                <div className="coah-thirdbar">
                    <div className="coah-smartchat">
                        <img src={SmartChat} />
                    </div>
                </div>
                <div className="coah-fourthbar">
                    <div className="loa-reason">
                        <img src={MaritalStatus} />
                    </div>
                    <div className="coah-transfer">
                        <img src={Shifting} />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default CE
