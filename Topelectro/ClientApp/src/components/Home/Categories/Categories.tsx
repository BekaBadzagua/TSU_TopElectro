import React from 'react'
import cls from './Categories.module.css';
import { useTranslation } from 'react-i18next';
// images
import CategoryRosets from '../../../assets/images/category/CategoryRosets.png'
import CategoryBox from '../../../assets/images/category/CategoryBox.png'
import CategoryRetro from '../../../assets/images/category/CategoryRetro.png'
import CategoryAutomats from '../../../assets/images/category/CategoryAutomats.png'

import SectionHeader from '../../UI/Headers/SectionHeader';
import { useHistory } from 'react-router';

interface Props {

}

const Categories = (props: Props) => {
    const { t } = useTranslation()
    const history = useHistory()
    return (
        <section className={cls.Categories}>

            <SectionHeader showBtn={true} linkTo="/products"
                btnText={t('home.categories.buttonText')}>
                {t('home.categories.header')}
            </SectionHeader>

            <div className="row">
                <div className="col col-sm-1"></div>
                <div className="col col-sm-10">
                    <div className={[cls.Category, 'col col-sm-3'].join(' ')}>
                        <h1>{t('home.categories.1.title')}</h1>
                        <img src={CategoryRosets} alt="categImg1" />
                        <div onClick={() => { history.push('/products/seriaTaimir') }}>
                            <h1>{t('home.categories.1.title')}</h1>
                            <p>{t('home.categories.1.description')}</p>
                        </div>
                    </div>
                    <div className={[cls.Category, 'col col-sm-3'].join(' ')}>
                        <h1>{t('home.categories.2.title')}</h1>
                        <img src={CategoryBox} alt="categImg1" />
                        <div onClick={() => { history.push('/products/gamanawilebeliKolofebi') }}>
                            <h1>{t('home.categories.2.title')}</h1>
                            <p>{t('home.categories.2.description')}</p>
                        </div>
                    </div>
                    <div className={[cls.Category, 'col col-sm-3'].join(' ')}>
                        <h1>{t('home.categories.3.title')}</h1>
                        <img src={CategoryRetro} alt="categImg1" />
                        <div onClick={() => { history.push('/products/seriaRetro') }}>
                            <h1>{t('home.categories.3.title')}</h1>
                            <p>{t('home.categories.3.description')}</p>
                        </div>
                    </div>
                    <div className={[cls.Category, 'col col-sm-3'].join(' ')}>
                        <h1>{t('home.categories.4.title')}</h1>
                        <img src={CategoryAutomats} alt="categImg2" />
                        <div onClick={() => {history.push('/products/avtomaturiAmomrtveli') }}>
                            <h1>{t('home.categories.4.title')}</h1>
                            <p>{t('home.categories.4.description')}</p>
                        </div>
                    </div>
                </div>
                <div className="col col-sm-1"></div>
            </div>
        </section>
    )
}

export default Categories
