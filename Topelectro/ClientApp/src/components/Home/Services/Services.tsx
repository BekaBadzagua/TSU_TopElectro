import React from 'react'
import Money from '@material-ui/icons/AttachMoney'
import { useTranslation } from 'react-i18next';
import { Truck, Tags, Tools, Shop, Cart2 } from 'react-bootstrap-icons';
import cls from './Services.module.css'
import SectionHeader from '../../UI/Headers/SectionHeader'

interface Props {

}

const Services = (props: Props) => {
  const { t } = useTranslation();

  return (
    <section className={cls.Services}>

      <SectionHeader centered={true} showBtn={false}>{t('home.services.header')}</SectionHeader>
      <div className={cls.Row}>
        <div className={cls.Service}>
          <div><Truck /></div>
          <div>
            <h3>{t('home.services.1.title')}</h3>
            <p>{t('home.services.1.desc')}</p>
          </div>
        </div>

        <div className={cls.Service}>
          <div><Tags /></div>
          <div>
            <h3>{t('home.services.2.title')}</h3>
            <p>{t('home.services.2.desc')}</p>
          </div>
        </div>

        <div className={cls.Service}>
          <div><Tools /></div>
          <div>
            <h3>{t('home.services.3.title')}</h3>
            <p>{t('home.services.3.desc')}</p>
          </div>
        </div>
        <div className={cls.Service}>
          <div><Cart2 /></div>
          <div>
            <h3>{t('home.services.4.title')}</h3>
            <p>{t('home.services.4.desc')}</p>
          </div>
        </div>




        <div className={cls.Service}>
          <div><Shop /></div>
          <div>
            <h3>{t('home.services.5.title')}</h3>
            <p>{t('home.services.5.desc')}</p>
          </div>
        </div>

        <div className={cls.Service}>
          <div><Money /></div>
          <div>
            <h3>{t('home.services.6.title')}</h3>
            <p>{t('home.services.6.desc')}</p>
          </div>
        </div>


      </div>
    </section >
  )
}

export default Services
