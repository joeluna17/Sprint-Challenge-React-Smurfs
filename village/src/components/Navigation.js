import React from 'react';
import {NavLink} from 'react-router-dom';


const Naviagtion = props => {

        return(
            <div className="nav-wrapper">
                <NavLink activeClassName="active-link"  exact to='/'>Home</NavLink> 
                <NavLink activeClassName="active-link" exact to='/smurf-form'>Add Smurf</NavLink>
            </div>
        )
}

export default Naviagtion;