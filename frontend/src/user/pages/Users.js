import React from 'react'
import UsersList from '../components/UsersList.js'
import shrey from './shrey.jpg'
import palak from './palak.jpeg';
import sparsh from './sparsh.jpeg'
//import {NavLink} from 'react-router-dom';
function Users()
{
    const Users=[{id:'u1' ,
    image : shrey,
    university: 'Bennett University',
    name : 'shrey agrawal' },
    {id:'u2' ,
    image : palak,
    university: 'Bennett University',
    name : 'palak kanongoo' },
    {id:'u3' ,
    image : sparsh,
    university: 'Bennett University',
    name : 'sparsh pekhele' }];

    return(
    <UsersList items={Users}/>
    );
}
export default Users;