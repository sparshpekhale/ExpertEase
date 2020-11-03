import React ,{useEffect,useState}from 'react';
import UsersList from '../components/UsersList.js'

import ErrorModal from '../../shared/components/UIElement/ErrorModal.js';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner.js';
import { useHttpClient } from '../../shared/hooks/http-hook.js';
import './Users.css'
//import {NavLink} from 'react-router-dom';
function Users(props)
{
    const data=props.items;
  const [searchUser, setsearchUser] = useState(data);

  
  const searchHandler=(event)=>
  {
      
    
    
    event.preventDefault();
   // console.log(event.target.value);
    let finaluser = data.filter(user => {
        let username=user.name.toLowerCase();
        let useruniversity=user.university.toLowerCase();
      let search=event.target.value.toLowerCase();
       return( username.includes(search) || useruniversity.includes(search))});
    //console.log(finaluser);
    setsearchUser(finaluser);
    
    
  }
  
  return (
    <React.Fragment>
      <div className="wrapper">
      <div className="search">
        <img className="searchimg" src="https://www.pinclipart.com/picdir/middle/403-4034781_png-file-search-icon-android-png-clipart.png" alt="search icon" />
      <input id="searchbar" type="text" placeholder="Search.." onChange={searchHandler}/>
      </div>
      </div>
       <UsersList items={searchUser} />
    </React.Fragment>
  );
  }

export default Users;