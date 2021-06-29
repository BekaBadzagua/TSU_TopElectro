import React from 'react'
import cls from './About.module.css'
import img from '../../assets/images/aboutus2.jpg'
import img2 from '../../assets/images/lamp.jpg'
import personFemale from '../../assets/images/personPlaceholderWoman.jpg'
import personMale from '../../assets/images/personPlaceholderMale.jpg'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet';

import Check from '@material-ui/icons/Done'
import Phone from '@material-ui/icons/PhoneAndroid'
import SectionHeader from '../UI/Headers/SectionHeader'
import SmallHeading from '../UI/Headers/SmallHeading/SmallHeading'
import ImageHeading from '../UI/Headers/ImageHeading'

const About = (props: any) => {
    const { t } = useTranslation();
    return (
        <section className={cls.About}>
            <Helmet>
                <title>Top Electro - ჩვენს შესახებ</title>
                <meta name='robots' content='index' />
                <meta name="description" content=",,TOP ELEKTRO’’ - იხილეთ ინფორმაცია ჩვენი გუნდის შესახებ" />
                <meta name="keywords" content="topelectro, topelektro,TDM topelektro, topelectro გუნდი, topelectro-ს შესახებ, about topelectro" />
            </Helmet>
            <ImageHeading img={img}
                heading={t('aboutus.heading')}
                page={t('aboutus.page')}
                homePage={t('navigation.home')} />
            <div className={[cls.Info].join(' ')}>
                <div >
                    <img src={img2} alt="company" />
                </div>
                <div >
                    <h1>{t('aboutus.aboutCompany')}</h1>
                    <p>{t('aboutus.description')}</p>
                    <ul>
                        <li><Check />{t("aboutus.checkList.1")}</li>
                        <li><Check />{t("aboutus.checkList.2")}</li>
                        <li><Check />{t("aboutus.checkList.3")}</li>
                    </ul>
                </div>
            </div>

            <SectionHeader centered={true}>{t("aboutus.ourTeam")}</SectionHeader>

            <SmallHeading>{t("aboutus.creators")}</SmallHeading>
            <div className={cls.Team}>
                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.3.name")}</h2>
                    <h3>{t("aboutus.team.3.role")}</h3>
                    <p><Phone /><span>568 77 86 27</span></p>

                </div>
                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.1.name")}</h2>
                    <h3>{t("aboutus.team.1.role")}</h3>
                    <p><Phone /><span>568 77 86 37</span></p>
                </div>
                <div>
                    <img src={personFemale} alt="personFemale" />
                    <h2>{t("aboutus.team.2.name")}</h2>
                    <h3>{t("aboutus.team.2.role")}</h3>
                    <p><Phone /><span>574 88 43 13</span></p>
                </div>
            </div>
            <SmallHeading>{t("aboutus.managers")}</SmallHeading>
            <div className={cls.Team}>
                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.4.name")}</h2>
                    <h3>{t("aboutus.team.4.role")}</h3>
                    {/* <p><Phone /><span>598 90 15 99</span></p> */}
                </div>
                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.5.name")}</h2>
                    <h3>{t("aboutus.team.5.role")}</h3>
                    {/* <p><Phone /><span>598 90 15 99</span></p> */}
                </div>

                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.6.name")}</h2>
                    <h3>{t("aboutus.team.6.role")}</h3>
                    {/* <p><Phone /><span>598 90 15 99</span></p> */}
                </div>
                
            </div>
            <SmallHeading>{t("aboutus.Employees")}</SmallHeading>
            <div className={cls.Team}>
                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.7.name")}</h2>
                    <h3>{t("aboutus.team.7.role")}</h3>
                    {/* <p><Phone /><span>598 90 15 99</span></p> */}
                </div>
                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.8.name")}</h2>
                    <h3>{t("aboutus.team.8.role")}</h3>
                    {/* <p><Phone /><span>598 90 15 99</span></p> */}
                </div>

                <div>
                    <img src={personMale} alt="personMale" />
                    <h2>{t("aboutus.team.9.name")}</h2>
                    <h3>{t("aboutus.team.9.role")}</h3>
                    {/* <p><Phone /><span>598 90 15 99</span></p> */}
                </div>
                
            </div>

        </section>
    )
}

export default About