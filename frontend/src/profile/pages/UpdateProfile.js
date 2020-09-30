import React from 'react'
import {useParams} from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './UpdateProfile.css';
function UpdateProfile()
{
    const DUMMY_PLACE=[
        {
            id:'p1',
            title:'Shrey Agrawal',
           // imageUrl:shrey,
            descirption :'Engineer/Web developer',
            University:'Bennett University',
            works:'working on project experease ',
            address:'Sundar street,chandausi',
            creator:'u1'
           },
           {
            id:'p2',
            title:'palak kanongoo',
           // imageUrl:palak,
            descirption :'Engineer/Web developer',
            University:'Bennett University',
            works:'working on project experease ',
            address:'India',
            creator:'u2'
           },
           {
            id:'p3',
            title:'Sparsh Pekhele',
           // imageUrl:sparsh,
            descirption :'Engineer/Web developer',
            University:'Bennett University',
            works:'working on project experease ',
            address:'nasik',
            creator:'u3'
           }
    ];
    const profileId=useParams().profileId;
    const identifiedProfile=DUMMY_PLACE.find(p => p.id===profileId);
        return(<form className="place-form">
            
                    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(3)]}
                     errorText="Please enter a valid text"/>
                    </form>
            
        );
}
export default UpdateProfile;