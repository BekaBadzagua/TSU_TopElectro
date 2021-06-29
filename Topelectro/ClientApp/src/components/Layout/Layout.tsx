import React, { ReactElement } from 'react'

import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import Topbar from './Topbar/Topbar'
import { NavLink } from 'react-router-dom'
import FaceBookIcon from '@material-ui/icons/Facebook'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibraryOutlined'
import NavigationIcon from '@material-ui/icons/MapOutlined'
import MailIcon from '@material-ui/icons/MailOutlineRounded'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'

import cls from './Layout.module.css'

interface Props {
    showAll:Boolean,
    children:any
}

export default function Layout({showAll, children}: Props): ReactElement {
    return (
        <React.Fragment>
                {/* SideBar */}
                <Sidebar />
                {/* Content */}
                <div className={cls.Main}>
                    {/* TopBar */}
                   <Topbar />
                    <div className={cls.Content}>
                        {children}
                    </div>

                    {showAll ? <Footer /> : null}
                    

                </div>
                {/* Right SideBar */}
                <div className={cls.Rightidebar}>
                    <ul>

                        <li><a target="_blank" href="https://www.facebook.com/beqa.badzagua.54/" rel="noopener noreferrer">
                            <FaceBookIcon /></a>
                        </li>
                        <li><NavLink to="/gallery"><PhotoLibraryIcon /></NavLink></li>
                        <li><NavLink to="/"><NavigationIcon /></NavLink></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/cNp1VjAKbAHd7niJ7">
                            <LocationIcon /></a>
                        </li>
                        <li><NavLink to="/contact"><MailIcon /></NavLink></li>
                    </ul>
                </div>
            </React.Fragment>
    )
}

