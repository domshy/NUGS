import React from 'react'
import '../../../css/Admin/ViewSubmittedSii.css'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { BsDownload } from 'react-icons/bs'

function ViewGradForm() {
    return (
        <div className="viewsii-wrapper">
            <div className="viewsii-header">
                <div className="viewsubmitted-back-btn">
                    <Link to="/dashboard/submittedsiiform">
                        <IoChevronBackOutline />
                    </Link>
                </div>
                <div className="viewsubmittedsii-name">
                    <h1>Back</h1>
                </div>
            </div>
            <div className="viewsubmitsii-content">
                <div className="viewsubmitsii-content-header">
                    <h2>2020-0217822</h2>
                    <span id="download-icon"><BsDownload size='2em' /></span>
                </div>
                <div className="viewsubmitsii-body">
                <h1>Name: Khysshia Leighn D. Domingo</h1>
                <br/>
                <p>Course Enrolled: BSIT - MWA</p>
                <br/>
                <p>Sex: Female</p>
                <br/>
                <p>Gender Preference: Bisexual</p>
                <br/>
                <p>nationality: Filipino</p>
                <br/>
                <p>City Address: Sampaloc, Manila</p>
                <br/>
                <p>Provincial Address: Marilao, Bulacan</p>
                <br/>
                <p>Civil Status: Single</p>
                <br/>
                <p>Elementary: Christ's Aciever;s Montessori School</p>
                <br/>
                <p>Year Graduated: 2012</p>
                </div>
            </div>

        </div>
    )
}

export default ViewGradForm
