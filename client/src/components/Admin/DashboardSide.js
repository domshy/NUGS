import React from 'react'
import '../../css/Admin/DashboardSide.css'
import { GuidanceMembers } from './GuidanceMembers'
import gender from '../../images/overall/sii gender preference.png'

function DashboardSide() {
    return (
        <div className="dashboard-side">
            <div className="gender-preference">
                <img src={gender} />
            </div>
            <div className="dashboard-members">
                <div className="members-header">
                    <span>NU Guidance Department</span>
                </div>

                <div className="members-items">
                    <ul id="members-guidance">
                        {GuidanceMembers.map((members, index) => {
                            return (
                                <li key={members}>
                                    <div id="member-img"><img src={members.image} /></div>
                            
                                    <span id="member-name">{members.gname}</span>
                                    <br />
                                    <span id="member-grole">{members.grole}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <div id="admin-spacer">&nbsp;</div>
                </div>
            </div>

        </div>
    )
}

export default DashboardSide
