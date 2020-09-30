import React from 'react'
import './UsersList.css'
import UsersItem from './UsersItem'
import Card from '../../shared/components/UIElement/Card';
function UsersList(props)
{
        if(props.items.length===0)
        {
            return(
                <Card>
            <div className="centre">
                <h1>No user found</h1>
                
            </div>
            </Card>
            );
        }
        else
        {
            return(
                <ul className="users-list">
                    
               { props.items.map(user => <UsersItem key={user.id} id={user.id} name={user.name} image={user.image} university={user.university}/> )}
               </ul>
            );

        }
}
export default UsersList;