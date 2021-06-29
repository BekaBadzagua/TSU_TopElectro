import React from 'react';

import classes from '../Buttons.module.css'


const Button = (props:any) => {
    const buttonClasses = [classes.Button]

    const btnclass = props.btnClass ? props.btnClass.toLowerCase() : null;

    switch (btnclass) {
        case "success": buttonClasses.push(classes.Success); break;
        case "warning": buttonClasses.push(classes.Warning); break;
        case "danger": buttonClasses.push(classes.Danger); break;
        default: buttonClasses.push(classes.Default);
    }

    return <button
        className={buttonClasses.join(" ")}
        onClick={props.click}
        style={props.btnStyling}>
        {props.children}</button>;
}

export default Button;