import React from 'react'
import './UsersList.css'
import UsersItem from './UsersItem'
import Card from '../../shared/components/UIElement/Card';
function UsersList(props)
{
    if(props.items.length === 0)
    {
        return(
            <Card>
                <h1>Sorry! No users Found</h1>
            </Card>
        );
    }
       
        
            return(
                <ul className="users-list">
                    
               { props.items.map(user => <UsersItem key={user.id} id={user.id} name={user.name} image={user.image} university={user.university} verify={user.verify}/> )}
               </ul>
            );

        
}
export default UsersList;