import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';
import * as actions from '../../store/actions/index'
import Vacancy from './Vacancy'
import ImageHeading from '../UI/Headers/ImageHeading';
import img from '../../assets/images/team.jpg'
import cls from './Vacancies.module.css'
import { Helmet } from 'react-helmet';


function Vacancies(props: any): ReactElement {
    const { vacancies, getVacancies } = props
    const { t } = useTranslation()
    useEffect(() => {
        if (vacancies === undefined)
            getVacancies()
    }, [vacancies, getVacancies])



    let vacancyDivs = vacancies ? vacancies.map((vacancy: any, index: number) => {
        return (
            <Vacancy key={index} vacancy={vacancies[index]} />
        )
    }) : null;

    return (
        <div className={cls.Vacancies}>
            <Helmet>
                <title>Top Electro - ვაკანსიები</title>
                <meta name='robots' content='index' />
                <meta name="description" content=",,TOP ELEKTRO’’ - ვაკანსიები, გახდი ჩვენი გუნდის წევრი" />
                <meta name="keywords" content="topelectro, topelektro,TDM topelektro, topelectro ვაკანსიები, topelectro ვაკანსიები, topelectro ვაკანსიები" />
            </Helmet>
            <ImageHeading img={img}
                heading={t('vacancies.heading')}
                page={t('vacancies.page')}
                homePage={t('navigation.home')} />
            {vacancies && vacancies.length > 0 ? vacancyDivs :
                <h1 className={cls.NoVacFound}>
                    მოცემულ მომენტში ვაკანსიები არ არის გამოცხადებული.
               </h1>
            }
        </div>
    )
}




const mapStateToProps = (state: any) => ({
    vacancies: state.vacancies.list
})

const mapDispatchToProps = (dispatch: any) => ({
    getVacancies: (num: number) => dispatch(actions.get_Vacancies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Vacancies)