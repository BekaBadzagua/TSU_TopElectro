import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next';
import LanguageBox from '../LanguageBox/LanguageBox';
import MenuIcon from '@material-ui/icons/Menu'
import cls from '../Layout.module.css'
import { NavLink } from 'react-router-dom';
import $ from 'jquery'

import HomeIcon from '@material-ui/icons/HomeRounded'
import VacanciesIcon from '@material-ui/icons/ReceiptOutlined'
import ProductIcon from '@material-ui/icons/ShoppingCart'
import ImageIcon from '@material-ui/icons/Image'
import MailIcon from '@material-ui/icons/MailOutline'
import AboutIcon from '@material-ui/icons/People'

interface Props {

}

export default function Topbar(props: Props): ReactElement {

    const { t } = useTranslation();
    let topNavHidden = true;

    const showNavHandler = () => {
        if(topNavHidden){
            $('#TopNavBox').css("max-width","350px")
            $('#TopNavBox').css("height","500px")
        }
        else{
            $('#TopNavBox').css("max-width","0")
            $('#TopNavBox').css("height","0")
        }
        topNavHidden = !topNavHidden
    }


    return (
        <header className={cls.TopBar}>
            <ul className={cls.TopList}>
                <li className="dropdown"><LanguageBox /></li>
                <li  onClick={showNavHandler}>{t('common.menu')} <MenuIcon /></li>
            </ul>
            <div className={cls.TopNavigation_wrapper} id="TopNavBox">
                <ul className={cls.TopNavigation}>
                    <li onClick={showNavHandler}><MenuIcon /></li>
                    <NavLink to="/"
                        exact={true}
                        activeClassName={cls.ActiveItem}
                        onClick={showNavHandler}><li>{t('navigation.home')}<HomeIcon /></li></NavLink>
                    <NavLink
                        to="/products"
                        exact={false}
                        activeClassName={cls.ActiveItem}
                        onClick={showNavHandler}><li>{t('navigation.product')}<ProductIcon /></li></NavLink>
                    <NavLink
                        to="/gallery"
                        exact={true}
                        activeClassName={cls.ActiveItem}
                        onClick={showNavHandler}><li>{t('navigation.gallery')}<ImageIcon /></li></NavLink>
                    <NavLink
                        to="/vacancy"
                        exact={true}
                        activeClassName={cls.ActiveItem}
                        onClick={showNavHandler}><li>{t('navigation.vacancies')}<VacanciesIcon /></li></NavLink>
                    <NavLink
                        to="/about"
                        exact={true}
                        activeClassName={cls.ActiveItem}
                        onClick={showNavHandler}><li>{t('navigation.about')}<AboutIcon /></li></NavLink>
                    <NavLink
                        to="/contact"
                        exact={true}
                        activeClassName={cls.ActiveItem}
                        onClick={showNavHandler}><li>{t('navigation.contact')}<MailIcon /></li></NavLink>
                </ul>
            </div>
        </header >
    )
}
