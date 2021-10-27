import React from 'react'
import '../../../css/Admin/SubmittedSii.css'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { BsDownload } from 'react-icons/bs'


function SubmittedSii() {
    return (
        <div className="submittedsii-wrapper">
            <div className="submittedsii-header">
                <div className="submitted-back-btn">
                    <Link to="/dashboard">
                        <IoChevronBackOutline />
                    </Link>
                </div>
                <div className="submittedsii-name">
                    <h1>Back to Dashboard</h1>
                </div>
            </div>
            <div className="submittedsii-container">
                <div className="submittedsii-content-header">
                    <h3 style={{color: 'white', textTransform: 'uppercase', fontSize: '20px'}}>List of Submitted Exit to Graduate Forms</h3>
                    <span id="download-icon"><BsDownload size='2em' /></span>
                </div>
                <div className="submittedsii-contents">
                    <table className="activity-table">
                        <tr>
                            <th>Student ID</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>2020-0217822</td>
                            <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-908742</td>
                            <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>
                        </tr>
                        <tr>
                            <td>2020-1092456</td>
                            <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-112034</td>
                            <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-554922</td>
                            <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-56678</td>
                            <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-12234</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-55569</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-9864576</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-19921</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-56678</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-12234</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-55569</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-9864576</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>
                        <tr>
                            <td>2020-19921</td>
                             <td><Link to="/dashboard/submittedgradform/viewgradform">View</Link></td>

                        </tr>


                    </table>

                </div>
            </div>
        </div>
    )
}

export default SubmittedSii
