import React from 'react'
import './UsersItem.css'
import Avatar from '../../shared/components/UIElement/Avatar'
import {Link} from 'react-router-dom'
import Card from '../../shared/components/UIElement/Card'
import Button from '../../shared/components/FormElements/Button'
import image from './download.png';
function UsersList(props)
{
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/profile`}>
                <div className="user-item__image">
                    <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
                </div>
               
                <div className="user-item__info">
                   
                    <h2>{props.name}</h2>
                    <img className="verified" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsJeJbXsTdhsi9EuJTcOcct-JMXbRyLco75g&usqp=CAU" alt="verified" style={{display: props.verify ? 'inline-block' :"none" }} />
                    <h3>{props.university}</h3>
                    
                    
                </div>
            
            </Link>
            </Card>
        </li>
        
        
    )
}
export default UsersList;