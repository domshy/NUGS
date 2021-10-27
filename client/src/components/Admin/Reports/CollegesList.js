import React from 'react'
import './CollegeList.css'


function CollegeList() {
    return (
        <div className="colleges-wrapper">
            <div className="colleges-contents">
                <div className="colleges-cards1">
                    <ul id="colleges-items">
                        <li><a href="/reports/alliedhealth"><div className="coh">
                            <h1>College of Allied Health</h1>
                        </div></a>
                        </li>
                        <li><a href="/reports/architecture"><div className="coa">
                            <h1>College of Architecture</h1>
                        </div></a>
                        </li>
                        <li><a href="/reports/accountancy"><div className="cba">
                            <h1>College of Business and Accountancy</h1>
                        </div></a>
                        </li>
                        <li><a href="/reports/ccit"><div className="ccit">
                            <h1>College of Computing and Information Technology</h1>
                        </div></a>
                        </li>
                    </ul>
                </div>
                <div className="colleges-cards2">
                    <ul id="college-items2">
                        <li><a href="/reports/dentistry"><div className="cd">
                            <h1>College of Dentistry</h1>
                        </div></a>
                        </li>
                        <li><a href="/reports/ceas"><div className="ceas">
                            <h1>College of Education, Arts, and Sciences</h1>
                        </div></a>
                        </li>
                        <li><a href="/reports/engineering"><div className="ce">
                            <h1>College of Engineering</h1>
                        </div></a>
                        </li>
                        <li><a href="/reports/tourism"><div className="cthm">
                            <h1>College of Tourism and Hospitality Management</h1>
                        </div></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CollegeList
