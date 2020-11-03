import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';
function NavLinks(props)
{const auth=useContext(AuthContext);
    console.log(auth.message);
    const logoutHandler=()=>{auth.logout()};
    return(
    <ul className="nav-links">
        <li>
            <NavLink to={`/chat?sender=${auth.name}&name=${auth.name}&id=${auth.userId}`}> Inbox </NavLink>
        </li>
        {auth.message ==='advisor' && (<li>
            <NavLink to={`/${auth.userId}/profile`}> {auth.name} </NavLink>
        </li>)}
        <li>
        <NavLink to="/" exact>All Users</NavLink>
         </li>
        {auth.isLoggedin &&( <li>
           < NavLink to="/auth" onClick={logoutHandler}>Logout</NavLink>
        </li>)}
    </ul>
    );

}
export default NavLinks;