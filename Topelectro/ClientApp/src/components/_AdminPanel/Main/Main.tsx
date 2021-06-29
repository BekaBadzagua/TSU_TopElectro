import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PermIdentity from '@material-ui/icons/PermIdentityOutlined'
import CardTravel from '@material-ui/icons/CardTravelOutlined'
import Exit from '@material-ui/icons/ExitToApp'
import cls from './Main.module.css'

interface Props {
    setUser:any
}

export default function Main(props: Props): ReactElement {

    const logOutHandler = () => {
        axios.post('api/account/logout')
            .then(()=>{
                props.setUser(false)
            })
            .catch(error=>{
                console.log(error);
            })
    }

    return (
        <div className={cls.AdminPanel}>
            <Link to="Admin/products">
                <div className={cls.Box}>
                    <CardTravel />
                    <h1>პროდუქცია</h1>
                </div>
            </Link>
            <Link to="Admin/vacancy">
                <div className={cls.Box}>
                    <PermIdentity />
                    <h1>ვაკანსსიები</h1>
                </div>
            </Link>
            <div className={cls.Box} onClick={logOutHandler}>
                <Exit />
                <h1>გამოსვლა</h1>
            </div>
        </div>
    )
}
