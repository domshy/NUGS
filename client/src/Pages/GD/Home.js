import React from 'react'
import '../../css/GD/Home.css'
import Header from '../../components/Header'
import Sidebar from '../../components/GD/Sidebar'

export default function Home() {
    return (
        <div className='homeWrapper'>
            <Header />
            <Sidebar />
        </div>
    )
}
