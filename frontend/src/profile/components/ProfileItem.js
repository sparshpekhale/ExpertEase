import React ,{useContext}from 'react';
import {useParams} from 'react-router-dom';
import Card from '../../shared/components/UIElement/Card'
import  '../components/ProfileItem.css';
import Button from '../../shared/components/FormElements/Button'
import { AuthContext } from '../../shared/context/auth-context';
function ProfileItem(props)
{const auth=useContext(AuthContext);
    const {userId}=useParams();
   // console.log(userId);
    return (
        <li className="place-item">
            <Card className="place-item__content">
            <div className="place-item__image">
                <img src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.title} />
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h3>University: {props.university}</h3>
                <p>ABOUT :{props.descirption}</p>
                <p>WORKS : {props.works}</p>
            </div>
            <div className="place-item__action">
                {auth.userId===userId && <Button to={`/profile/${props.id}`}>EDIT</Button>}
                <Button to={`/chat?sender=${auth.name}&name=${props.title}&id=${props.id}`}>{auth.userId===userId ?'Inbox' : 'Message'}</Button>
                         
            </div>
            </Card>
        </li>
    )

}
export default ProfileItem;