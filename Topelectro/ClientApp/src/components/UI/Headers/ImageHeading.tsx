import React from 'react'
import { NavLink } from 'react-router-dom';
import cls from './Headers.module.css'



const ImageHeading = (props: any) => {


    return (
        <div className={cls.ImageHeading}>
            <img src={props.img} alt="header" />
            <div>
                <h1>{props.heading}</h1>
                
                <p><NavLink to="/">{props.homePage}</NavLink><span>•</span>{props.page}</p>
            </div>
        </div>
    )
}

export default ImageHeading