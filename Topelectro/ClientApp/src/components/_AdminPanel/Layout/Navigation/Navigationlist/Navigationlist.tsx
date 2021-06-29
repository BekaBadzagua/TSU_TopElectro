import React from 'react'
import classes from './Navigationlist.module.css'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import PermIdentity from '@material-ui/icons/PermIdentityOutlined'
import Description from '@material-ui/icons/DescriptionOutlined'
import CardTravel from '@material-ui/icons/CardTravelOutlined'

import NaviItem from './NavigationItem/NavigationItem'

const NavigationList = (props:any) => {
    const navClasses = [classes.Nav, props.additionalClass]

    const navItems = [
        {
            link: '/Admin',
            icon: <HomeIcon />,
            text: 'მთავარი',
            exact: true
        },
        {
            link: '/Admin/products',
            icon: <CardTravel />,
            text: 'პროდუქტი',
            exact: true
        },
        {
            link: '/Admin/pricecontrol',
            icon: <Description />,
            text: 'ფასები',
            exact: true
        },
        {
            link: '/Admin/vacancy',
            icon: <PermIdentity />,
            text: 'ვაკანსიები',
            exact: true
        }
    ]

    const navigationList = navItems.map((item, index) => (
        <NaviItem
            key={index}
            listKey={index}
            exact={item.exact}
            link={item.link}
            iconClass={item.icon}
            showIcon={props.showIcons}
            click={props.onItemClick}
            activeClass={classes.active}>{item.text}</NaviItem>
    ));

    return (
        <nav className={navClasses.join(" ")}>
            <ul>
                {navigationList}
            </ul>
        </nav>
    );
}


export default NavigationList








