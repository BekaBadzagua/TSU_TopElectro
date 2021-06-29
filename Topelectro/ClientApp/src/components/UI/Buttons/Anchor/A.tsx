import React from 'react';

import classes from '../Buttons.module.css'


interface Props {
    btnClass?:string,
    href?:string,
    attributes?:object,
    children?:any,
    click?: any
}

const A = (props: Props) => {
    const buttonClasses = [classes.Button]

    const btnclass = props.btnClass ? props.btnClass.toLowerCase() : null;

    switch (btnclass) {
        case "success": buttonClasses.push(classes.Success); break;
        case "danger": buttonClasses.push(classes.Danger); break;
        case "warning": buttonClasses.push(classes.Warning); break;
        default: buttonClasses.push(classes.Default);
    }

    return <a
        className={buttonClasses.join(" ")}
        href={props.href}
        onClick={props.click} 
        {...props.attributes}>
        {props.children}</a>;
}


export default A;
