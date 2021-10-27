import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import '../../css/Enrollment.css'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'

function Enrollment() {
    return (
        <div className="enrollment-wrapper">
            <Header />
            <Navbar />
            <div className="enrollment-container">
                <div className="enrollment-name">
                    <h1>Student Individual Inventory</h1>
                </div>
                <div className="enrollment-holder">
                    <div className="enrollment-contents">
                        <div className="enrollment-create-btn">
                            <Link to="/enrollment/enrollmentstudentform">
                                <button><MdAdd />Fill up form</button>
                            </Link>
                        </div>
                        <div className="enrollment-list">
                            <div className="enrollment-status">
                                No Request Yet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enrollment