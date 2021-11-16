import React from 'react';
import '../../css/Admin/Header_admin.css'
import { IconContext } from 'react-icons';
import { RiNotification2Fill } from 'react-icons/ri';
import { IoAlertCircleOutline } from 'react-icons/io5'
import header_logo from '../../images/header.png'
import { IoExitOutline } from 'react-icons/io5'
import ash from '../../images/ansherina_lhynne_c_bautista.jpg'

function Header_admin() {
    return (
        <div>
            <header className="header1">
                <nav className="header_navigation1">
                    <div></div>
                    <div className="header_logo1"><a href="/main"><img src={header_logo} /></a></div>
                    <div className="webname1"><h1>NU GUIDANCE SERVICES SYSTEM</h1></div>
                    <div className="space1" />
                    <div className="header_item1">
                        <ul>
                            <IconContext.Provider value={{ size: '2em' }}>
                                {/* <li id="display-picture1"><a href="/account"><img src={ash} /></a></li> */}
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

export default Header_admin;