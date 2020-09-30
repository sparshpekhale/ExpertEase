import React from 'react'
import './UsersItem.css'
import Avatar from '../../shared/components/UIElement/Avatar'
import {Link} from 'react-router-dom'
import Card from '../../shared/components/UIElement/Card'
function UsersList(props)
{
    return(
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/profile`}>
                <div classname="user-item__image">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className="user-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.university}</h3>
                </div>
                </Link>
            </Card>
        </li>
    )
}
export default UsersList;