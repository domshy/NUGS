import React from 'react';
import '../css/Home.css';
import DateTime from '../components/DateTime'
import Main from './Main';
import image1 from '../images/image1.png'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <div className="main-wrapper">
            <Header />
            <Navbar />
            <Main/>
            {/* <div className="main-contents">
                <div className="main-user-name">
                    <h1>Welcome, Khrysshia</h1>
                </div>
                <div className="main-announcement">
                    <div className="main-cards">
                        <div className="main-header">
                            <h1>ARAW NG KALAYAAN</h1>
                        </div>
                        <div className="main-announcement-body">
                            <div className="announcement-picture">
                                <img id="image-kk" src={image1} />
                            </div>
                            <div className="announcement-description">
                                <p className="announcement-date">June 12, Saturday</p>
                                <br />
                                <p>Independence Day is an annual national holiday in the Philippines observed on June 12, commemorating the declaration of Philippine independence from Spain in 1898.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    )
}

export default Home