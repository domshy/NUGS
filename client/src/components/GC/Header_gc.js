import React from 'react';
import '../../css/Admin/Header_admin.css'
import { IconContext } from 'react-icons';
import { RiNotification2Fill } from 'react-icons/ri';
import { IoAlertCircleOutline } from 'react-icons/io5'
import header_logo from '../../images/header.png'
import { IoExitOutline } from 'react-icons/io5'
import belle from '../../images/ma_honey_belle_b_vicencio.jpg'

function Header_gc() {
    return (
        <div>
            <header className="header">
                <nav className="header_navigation">
                    <div></div>
                    <div className="header_logo"><a href="/main"><img src={header_logo} /></a></div>
                    <div className="webname"><h1>NU GUIDANCE SERVICES SYSTEM</h1></div>
                    <div className="space" />
                    <div className="header_item">
                        <ul>
                            <IconContext.Provider value={{ size: '2em' }}>
                                <li id="display-picture"><a href="/account"><img src={belle} /></a></li>
                                <li><a href="/"><RiNotification2Fill /></a></li>
                                <li><a href="/aboutus"><IoAlertCircleOutline /></a></li>
                                <li><a href="/"><IoExitOutline /></a></li>
                            </IconContext.Provider>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>

    )

}

export default Header_gc;