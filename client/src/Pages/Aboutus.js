import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';


function Aboutus() {
    return (
        <div className="aboutus-container">
            <Header />
            <Navbar />

            <div className="aboutus-holder">
                <div className="aboutus-name">
                    <h1>ABOUT NU-THERAGUIDE</h1>
                </div>
                <div className="about-us-content">
                    NU-TheraGuide is an application made for NU Guidance Department
                </div>
            </div>
        </div>

    )
}

export default Aboutus;