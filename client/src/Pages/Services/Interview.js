import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import '../../css/Interview.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function Interview() {
    return (
        <div className="interview-wrapper">
            <Header />
            <Navbar />
            <div className="interview-container">
                <div className="interview-name">
                    <h1>Interviews</h1>
                </div>
                <div className="interview-holder">
                    <div className="interview-contents">
                        <div className="interview-create-btn">
                            <Link to="/interview/requestinterview">
                                <button><MdAdd />Request an Interview</button>
                            </Link>
                        </div>
                        <div className="interview-list">
                            <div className="interview-status">
                                No Request Yet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interview