import React ,{useEffect,useState}from 'react';
import UsersList from '../components/UsersList.js'

import ErrorModal from '../../shared/components/UIElement/ErrorModal.js';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner.js';
import { useHttpClient } from '../../shared/hooks/http-hook.js';
import './Users.css'
//import {NavLink} from 'react-router-dom';
import Search from './Search'
function Users()
{
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL+'/users'
        );
         const array=responseData.users;
         console.log(array)
        setLoadedUsers(array);
       
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);
 
  
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      
      {!isLoading && loadedUsers && <Search items={loadedUsers} />}
    </React.Fragment>
  );
  }

export default Users;