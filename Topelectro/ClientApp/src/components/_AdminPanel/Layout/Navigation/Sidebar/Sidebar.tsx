import React from 'react'
import classes from './Sidebar.module.css'
import NavigationList from '../Navigationlist/Navigationlist'
import logo from '../../../../../assets/images/logo.png'


const Sidebar = (props:any) => {

    return (
        <div className={classes.Sidebar}>
            <div className={classes.ImgWrapper}>
                <img src={logo} alt=""/>
                <h2>Admin</h2>
            </div>
            <NavigationList showIcons={true} />
        </div>
    );
}



export default Sidebar

