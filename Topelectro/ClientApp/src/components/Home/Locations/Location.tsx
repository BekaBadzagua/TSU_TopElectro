import React from 'react'
import cls from './Location.module.css'
import { useTranslation } from 'react-i18next';
import LocIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import locat1 from '../../../assets/images/EliavaShop.jpg'

import SectionHeader from '../../UI/Headers/SectionHeader';


const Locations = () => {
    const { t } = useTranslation();

    return (
        <section className={cls.Locations}>
            <SectionHeader centered={true} showBtn={false}>
                {t('home.locations.header')}
                <LocIcon style={{ fontSize: 60, marginTop: "-20px" }} />
            </SectionHeader>

            <div className={['row', cls.Loaction].join(' ')}>
                <div className="col col-md-1"></div>
                <div className="col col-md-5 align-center">
                    <img src={locat1} alt="LocationImage1" />
                </div>
                <div className="col col-md-5 align-center">
                    <h2>{t('home.locations.1.address')}</h2>
                    <h3><b>{t('home.locations.1.type')}</b></h3>
                    <h5><PhoneIcon />{t('common.phone')}: 568 77 86 37</h5>
                    <h5><PhoneIcon />{t('common.phone')}: 568 77 86 27</h5>
                </div>
                <div className="col col-md-1"></div>
            </div>
            {/* <div className={['row', cls.Loaction].join(' ')}>
                <div className="col col-md-1"></div>
                <div className="col col-md-5 align-center">
                    <h2>{t('home.locations.2.address')}</h2>
                    <h3><b>{t('home.locations.2.type')}</b></h3>
                    <h5><PhoneIcon />{t('common.phone')}: 568 77 86 37</h5>
                    <h5><PhoneIcon />{t('common.phone')}: 568 77 86 27</h5>
                </div>
                <div className="col col-md-5 align-center">
                    <img src={locat1} alt="LocationImage2" />
                </div>
                <div className="col col-md-1"></div>
            </div> */}
        </section>

    )
}

export default Locations