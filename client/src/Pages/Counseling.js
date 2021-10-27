import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import '../css/Counseling.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Counseling() {
    return (
        <div className="counseling-wrapper">
            <Header />
            <Navbar/>
            <div className="counseling-container">
                <div className="counseling-name">
                    <h1>NU Guidance Smart Chats</h1>
                </div>
                <div className="counseling-holder">
                    <div className="counseling-contents">
                        <div className="counseling-create-btn">
                            <Link to="/counseling/consent">
                                <button><MdAdd />Request Counseling</button>
                            </Link>
                        </div>
                        <div className="counseling-list">
                            <div className="counseling-status">
                                No Request Yet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counseling