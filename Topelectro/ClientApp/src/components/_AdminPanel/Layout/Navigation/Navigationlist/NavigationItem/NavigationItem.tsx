import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props:any) => {
    const icon = props.showIcon ? <i className="material-icons-outlined">{props.iconClass}</i> : null;
    const style = props.showIcon ? {} : {paddingRight:50};

    
    return (
        <NavLink to={props.link}
            exact={props.exact}
            activeClassName={props.activeClass}
            onClick={props.click}
        ><li style={style}>{icon}{props.children}</li></NavLink>
    );
}

export default NavigationItem;