import React from 'react';
import classes from './Layout.module.css';

import Sidebar from './Navigation/Sidebar/Sidebar';
import Topbar from './Navigation/Topbar/Topbar';


const Layout = (props:any) => {


    return (
        <div className="admin">
            <Topbar />
            <Sidebar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;