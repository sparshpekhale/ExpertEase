import React from 'react';
import PlaceList from '../components/ProfileList';
import shrey from './shrey.jpg';
import palak from './palak.jpeg'
import sparsh from './sparsh.jpeg'
import {useParams, usePrams} from 'react-router-dom';
const DUMMY_PLACE=[
    {
        id:'p1',
        title:'Shrey Agrawal',
        imageUrl:shrey,
        descirption :'Engineer/Web developer',
        University:'Bennett University',
        works:'working on project experease ',
        address:'Sundar street,chandausi',
        creator:'u1'
       },
       {
        id:'p2',
        title:'palak kanongoo',
        imageUrl:palak,
        descirption :'Engineer/Web developer',
        University:'Bennett University',
        works:'working on project experease ',
        address:'India',
        creator:'u2'
       },
       {
        id:'p3',
        title:'Sparsh Pekhele',
        imageUrl:sparsh,
        descirption :'Engineer/Web developer',
        University:'Bennett University',
        works:'working on project experease ',
        address:'nasik',
        creator:'u3'
       }
];
function UserProfile()
{
    const userId=useParams().userId;
    const loadedPlaces=DUMMY_PLACE.filter(place=> place.creator===userId)

    return <PlaceList items={loadedPlaces}/>;

}
export default UserProfile;