import React from 'react'
import DashBoardList from '../../components/Admin/DashBoardList'
import '../../css/Admin/Dashboard.css'
import DashboardSide from '../../components/Admin/DashboardSide'
import DashboardGraph from '../../components/Admin/DashboardGraph'
import Header from '../../components/Admin/Header_admin'
import Navbar from '../../components/Admin/Navbar_admin'

function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <Header />
            <Navbar />
            <div className="dashboard-header">
                <div className="dashboard-name">
                    <h1>Hi Ansherina, your analytics are all set!</h1>
                </div>
                <div className="dashboard-totals">
                    <div className="dashboard-cards">
                        <DashBoardList />
                    </div>
                </div>
            </div>
            <div className="dashboard-sides">
                <DashboardSide />
            </div>
            <div className="home-graphs">
                <DashboardGraph />
            </div>
        </div>
    )
}

export default Dashboard
