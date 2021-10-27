import React from 'react'
import concern from '../../images/overall/most concern.png'
import counselled from '../../images/overall/number of counselled.png'
import '../../css/Admin/DashboardGraph.css'
function DashboardGraph() {
    return (
        <div>
             <div className="dashboard-bars">
                <div className="graph-counselled">
                    <div className="graph-header">
                        <span>Total of Counselled for the year 2020</span>
                    </div>
                    <div id="counselled-img">
                        <img src={counselled} />
                    </div>
                </div>
                <div className="graph-concern">
                    <div className="graph-header">
                        <span>Reason of counseling</span>
                    </div>
                    <div id="concern-img">
                        <img src={concern} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardGraph
