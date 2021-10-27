import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarItem_admin } from './NavbarItem_admin';
import '../../css/Admin/Navbar_admin.css'



function Navbar_admin() {
    const [Navsidebar_admin, setNavSidebarAdmin] = useState(false);

    const showNavSidebarAdmin = () => setNavSidebarAdmin(!Navsidebar_admin);


    return (
        <>
            <nav className={Navsidebar_admin ? 'side-nav-menu-admin active' : 'side-nav-menu-admin'}>
                <ul className='admin-side-nav-menu-items' onClick={showNavSidebarAdmin}>
                    {NavbarItem_admin.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                               <div className="side-sidenavrow-admin">
                                   <Link to={item.path}>
                                    <div id="icon-admin">{item.icon}</div>
                                    <div id="title-admin"><span>{item.title}</span></div>
                                </Link>
                               </div>
                                
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar_admin;