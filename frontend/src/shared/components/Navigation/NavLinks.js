import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';
function NavLinks(props)
{
    return(
    <ul className="nav-links">
        <li>
            <NavLink to="/u1/profile">Your Name </NavLink>
        </li>
        <li>
        <NavLink to="/" exact>All Users</NavLink>
         </li>
        <li>
           < NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
    );

}
export default NavLinks;