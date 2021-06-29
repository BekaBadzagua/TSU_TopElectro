import React from 'react';

import classes from './SmallHeading.module.css'

const SmallHeading = (props:any) => (
    <div className={classes.SmallHeading}>
        <h3>{props.children}</h3>
    </div>
)

export default SmallHeading