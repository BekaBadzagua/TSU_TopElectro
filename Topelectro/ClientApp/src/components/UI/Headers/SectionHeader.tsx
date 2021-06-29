import React from 'react'
import cls from './Headers.module.css'
import Button from '../Buttons/Button/Button'
import { Link } from 'react-router-dom'

const SectionHeader = (props: any) => {



    return (
        <div className={cls.SectionHeader}>
            <h1 style={props.centered ? { textAlign: 'center', width: '100%' } : {}}>{props.children}</h1>
            {props.showBtn ?
                props.linkTo ? <Link to={props.linkTo}><Button btnClass="warning">{props.btnText}</Button></Link>
                    :
                    <Button btnClass="warning">{props.btnText}</Button>
                :
                null}
        </div>
    )
}

export default SectionHeader