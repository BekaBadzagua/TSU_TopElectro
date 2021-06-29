import React from 'react'
import cls from './Footer.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/MailOutlined'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'


export default function Footer(props: any) {

    const { t } = useTranslation()

    return (
        <footer className={cls.Footer}>
            <div className="container-center">
                <div className="row">
                    <div className="col col-md-4">
                        <h3>{t('footer.about')}</h3>
                        <p>{t('footer.description')}</p>
                    </div>
                    <div className="col col-md-4">
                        <h3>{t('footer.navigation')}</h3>

                        <div className="row">
                            <ul className="col col-md-6">
                                <li><Link to="/">{t('navigation.home')}</Link></li>
                                <li><Link to="/products">{t('navigation.product')}</Link></li>
                                <li><Link to="/gallery">{t('navigation.gallery')}</Link></li>
                            </ul>
                            <ul className="col col-md-6">
                                <li><Link to="/vacancies">{t('navigation.vacancies')}</Link></li>
                                <li><Link to="/about">{t('navigation.about')}</Link></li>
                                <li><Link to="/contact">{t('navigation.contact')}</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col col-md-4">
                        <h3>{t('footer.contactUs')}</h3>
                        <ul className={cls.ContactList}>
                            <li><MailIcon />top.elektro@mail.ru</li>
                            <li><LocationIcon />{t('common.mainAddress')}</li>
                            <li><PhoneIcon />{t('common.phone')}: +995 568 77 86 37</li>
                            <li><PhoneIcon />{t('common.phone')}: +995 568 77 86 27</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
