import React from 'react';

import ProfileItem from './ProfileItem';
import  '../components/ProfileList.css'
function ProfileList(props)
{
    
    return(
        <ul className="place-list">
            {props.items.map(info => <ProfileItem key={info.id} id={info.id}image={info.imageUrl} title={info.title} description={info.description} address={info.address} creatorId={info.cretor}  works={info.works}/>)}
        </ul>
    );

}
export default ProfileList;