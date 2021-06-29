import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import { useTranslation } from 'react-i18next';

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/HomeRounded'
import VacanciesIcon from '@material-ui/icons/ReceiptOutlined'
import ProductIcon from '@material-ui/icons/ShoppingCart'
import ImageIcon from '@material-ui/icons/Image'
import MailIcon from '@material-ui/icons/MailOutline'
import AboutIcon from '@material-ui/icons/People'

import sideText from "../../../assets/images/topelectro.png"
import logo from "../../../assets/images/logo.png"
import cls from './Sidebar.module.css'

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const { t } = useTranslation();


    const closeSidebarHandler = () =>{
        setShowSidebar(false)
    }
    const showSidebarHandler = () => {
        setShowSidebar(!showSidebar)
    }


    return (
        <div className={cls.Sidebar}>
            {/* Sidebar toggle TopElectro  */}
            <Transition
                in={!showSidebar}
                timeout={500}
                mountOnEnter
                unmountOnExit>
                {
                    state => {
                        let animationCl;
                        switch (state) {
                            case 'entering': animationCl = "showFromLeft"; break;
                            case 'exiting': animationCl = "hideToLeft"; break;
                            default: break;
                        }
                        return (
                            <div className={[cls.SidebarTrigger, animationCl].join(' ')}>
                                <span onClick={showSidebarHandler}>
                                    <img src={sideText} alt="sideText"></img>
                                    {/* <div><MenuIcon /></div> */}
                                </span>
                            </div>
                        )
                    }
                }
            </Transition>

            {/* Sidebar Content - navigation */}
            <Transition
                in={showSidebar}
                timeout={500}
                mountOnEnter
                unmountOnExit>
                {
                    state => {
                        let animationCl;
                        switch (state) {
                            case 'entering': animationCl = "showFromLeft"; break;
                            case 'exiting': animationCl = "hideToLeft"; break;
                            default: break;
                        }
                        return (
                            <>
                            <div id="SideBar" className={[cls.NavigationList, animationCl].join(' ')}>
                                <div className="align-right"><MenuIcon onClick={showSidebarHandler} /></div>

                                <div><img src={logo} alt="logo" /></div>

                                <ul className={cls.NavItems}>
                                    <NavLink
                                        to="/"
                                        exact={true}
                                        activeClassName={cls.ActiveItem}
                                        onClick={showSidebarHandler}><li><HomeIcon />{t('navigation.home')}</li></NavLink>
                                    <NavLink
                                        to="/products"
                                        exact={false}
                                        activeClassName={cls.ActiveItem}
                                        onClick={showSidebarHandler}><li><ProductIcon />{t('navigation.product')}</li></NavLink>
                                    <NavLink
                                        to="/gallery"
                                        exact={true}
                                        activeClassName={cls.ActiveItem}
                                        onClick={showSidebarHandler}><li><ImageIcon />{t('navigation.gallery')}</li></NavLink>
                                    <NavLink
                                        to="/vacancy"
                                        exact={true}
                                        activeClassName={cls.ActiveItem}
                                        onClick={showSidebarHandler}><li><VacanciesIcon />{t('navigation.vacancies')}</li></NavLink>
                                    <NavLink
                                        to="/about"
                                        exact={true}
                                        activeClassName={cls.ActiveItem}
                                        onClick={showSidebarHandler}><li><AboutIcon />{t('navigation.about')}</li></NavLink>
                                    <NavLink
                                        to="/contact"
                                        exact={true}
                                        activeClassName={cls.ActiveItem}
                                        onClick={showSidebarHandler}><li><MailIcon />{t('navigation.contact')}</li></NavLink>
                                </ul>


                                <p>{t('navigation.copyright')}</p>
                            </div>
                            <div className={cls.WhiteBack} onClick={closeSidebarHandler}>
                            </div>
                            </>
                        )
                    }
                }
            </Transition>
        </div>
    )
}

export default Sidebar
