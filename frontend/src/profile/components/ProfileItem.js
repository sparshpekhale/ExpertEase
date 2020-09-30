import React from 'react';
import Card from '../../shared/components/UIElement/Card'
import  '../components/ProfileItem.css';
import Button from '../../shared/components/FormElements/Button'
function ProfileItem(props)
{
    return (
        <li className="place-item">
            <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>ADDRESS: {props.address}</h3>
                <p>ABOUT US :{props.description}</p>
                <p>WORKS : {props.work}</p>
            </div>
            <div className="place-item__action">
                <Button to={`/profile/${props.id}`}>EDIT</Button>
            </div>
            </Card>
        </li>
    )

}
export default ProfileItem;