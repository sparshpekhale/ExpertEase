import React from 'react';

import ProfileItem from './ProfileItem';
import  '../components/ProfileList.css'
function ProfileList(props)
{
    const data=(props.items);
    
    
    return(
        <ul className="place-list">
            <ProfileItem key={data.id} 
        id={data.id}
        title={data.name}
        descirption={data.description}
          works={data.works} 
           university={data.university}
           image={data.image}/>
        </ul>
    );

}
export default ProfileList;