import React, { useState } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../css/CounselingConsent.css';
import { Link, useHistory } from 'react-router-dom'

function CounselingConsent() {
    return (
        <div>
            <div className="counselingconsent-wrapper">
                <Header />
                <Navbar />
                <div className="counselingconsent-page">
                    <div className="counselingconsent-header">
                        <h1>INFORMED CONSENT</h1>
                    </div>
                    <div className="counselingconsent-holder">
                        <div className="counselingconsent-content">
                            <p>ETHICS & CONFIDENTIALITY:</p>

                            <span>I expect the undersigned counselor and his/her staff members to uphold utmost
                                ethical standards and confidentiality. As this is a professional service, I
                                am aware that records (both written and digital) are essential and will be kept safe.
                                <br />
                                <br /> This confidentiality is suspended under the following circumstances:
                                <br />
                                <br />1. When there is serious, known, and foreseeable harm to myself or others;

                                <br />2. I reveal information of instances of abuse, in any form, being committed against a
                                vulnerable person (e.g., child, elder; employee, woman, mentally ill, etc.);

                                <br />3. A court order is issued or when such release is required by law; and

                                <br />4. I have authorized such release in writing or by verbal permission.
                                <br />
                                <br />TERMINATION OF SERVICES:
                                <br />
                                <br /> At any point in time, I have the right to terminate the services of the undersigned
                                counselor and at the same time, the counselor can terminate the services once I showed improvement in my case.

                                <br />I acknowledge that I have read and understood the terms outlined in this informed
                                consent. I affirm my responsibility in working towards my/my child’s (for clients
                                17 years old and below) goals for the current consultation.
                            </span>
                        </div>
                        <div className="formconsent">
                            <div className="consent-consultfamily">
                                <h2 className="consent-label">*CONSULTATIONS WITH FAMILY MEMBERS & ALLIED PROFESSIONALS:

                                    <br /><span style={{ fontSize: '11px', fontStyle: 'italic' }}>
                                        (In order to create a supportive environment for me, the undersigned counselor has my permission to seek consultation with the following in case of emergency:
                                         Members of my family, particularly (name of father, mother, aunt, siblings, etc.)</span></h2>
                                <input type="text" placeholder="Consultation with family members & allied professsionals" />
                            </div>
                            <div className="consent-contactnofamily">
                                <h2 className="consent-label">*Contact Number of my family member</h2>
                                <input type="text" placeholder="Contact Number of my family member" />
                            </div>
                            <div className="consent-consulted">
                                <h2 className="consent-label">*Other allied professionals with whom I have consulted, particularly <br />(Counselor, Psychologist, Psychiatrist - Name)</h2>
                                <input type="text" placeholder="Other allied professionals with whom I have consulted, particularly (Counselor, Psychologist, Psychiatrist - Name)" />
                            </div>
                            <div className="consent-frontside">
                                <h2 className="consent-label" >*Kindly upload a photocopy or picture of your National U ID <br />(FRONTSIDE) for our reference.</h2>
                                <input type="file" />
                            </div>
                            <div className="consent-backside">
                                <h2 className="consent-label">*Kindly upload a photocopy or picture of your National U ID <br />(BACKSIDE) for our reference.</h2>
                                <input type="file" />
                            </div>
                        </div>
                        <div className="counseling-consent-btns">
                            <div className="counseling-cancelbtn">
                                <Link to="/counseling">
                                    <button>Cancel</button>
                                </Link>
                            </div>
                            <div className="counseling-submitbtn">
                                <Link to="CounselingForm"><button>Next</button></Link>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CounselingConsent
