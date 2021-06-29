import React, { useState } from 'react'
import classes from './Topbar.module.css'
import MenuIcon from '@material-ui/icons/Menu'

import NavigationList from '../Navigationlist/Navigationlist'

const Topbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const updateShowMenuState = () => setShowMenu(!showMenu);


    return (
        <>
            <div className={classes.Topbar}>
                <span className="headerToggle" onClick={updateShowMenuState}>
                    <MenuIcon />
                </span>
            </div>
            <div style={{ display: showMenu ? "block" : "none" }}>
                <NavigationList
                    onItemClick={updateShowMenuState}
                    showIcons={false}
                    additionalClass={classes.TopbarNav} />
            </div>
        </>
    );
}

export default Topbar;