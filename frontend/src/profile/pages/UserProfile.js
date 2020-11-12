import React,{useEffect,useState} from 'react';
import PlaceList from '../components/ProfileList';
import shrey from './shrey.jpg';
import palak from './palak.jpeg'
import sparsh from './sparsh.jpeg'
import {useParams} from 'react-router-dom';
import {useHttpClient} from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElement/ErrorModal';
/* eslint-disable */
function UserProfile()
{const [loadedPlaces,setLoadedPlaces]=useState();
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    // eslint-disable-next-line
    const userId=useParams().userId;
    useEffect(() => {
        const fetchPlaces = async () => {
          try {
            const responseData = await sendRequest(
              process.env.REACT_APP_BACKEND_URL+`/profile/${userId}`
            );
            
            setLoadedPlaces(responseData.profile);
          } catch (err) {}
        };
        fetchPlaces();
      }, [sendRequest, userId]);
      
      //const obj=JSON.parse('loadedPlaces');
      //console.log(JSON.parse(`${loadedPlaces}`));
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            <div className="profile">
   {loadedPlaces&&  <PlaceList items={loadedPlaces}/>}
   </div>
    </React.Fragment>);

}
export default UserProfile;