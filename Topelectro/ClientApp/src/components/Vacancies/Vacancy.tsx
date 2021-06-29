import React, { ReactElement } from 'react'
import ReactHtmlParser from 'react-html-parser'
import cls from './Vacancies.module.css'

interface Props {
    vacancy: any
}

export default function Vacancy(props: Props): ReactElement {
    return (
        <div className={cls.Vacancy}>
            <div className={cls.FixedINfo}>
                <h1>{props.vacancy.position}</h1>
                <table>
                    <tbody>
                        {props.vacancy.location ? <tr><td>მდებარეობა:</td><td>{props.vacancy.location}</td></tr> : null}
                        {props.vacancy.employmentForm ? <tr><td>დასაქმების ფორმა:</td><td>{props.vacancy.employmentForm}</td></tr> : null}
                        {props.vacancy.workHours ? <tr><td>სამუშაო საათები:</td><td>{props.vacancy.workHours}</td></tr> : null}
                        {props.vacancy.restPeriod ? <tr><td>შესვენება:</td><td>{props.vacancy.restPeriod}</td></tr> : null}
                        {props.vacancy.salary ? <tr><td>ანაზღაურება:</td><td>{props.vacancy.salary}</td></tr> : null}
                    </tbody>
                </table>
                <p>{props.vacancy.description}</p>
            </div>
            {props.vacancy.detailedDescription ?
                (
                    <div className={cls.DetailedInfo}>
                        {ReactHtmlParser(props.vacancy.detailedDescription)}
                    </div>
                ) :
                null
            }
        </div>
    )
}
