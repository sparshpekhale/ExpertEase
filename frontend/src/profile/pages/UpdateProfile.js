import React ,{useCallback,useState,useEffect,useContext,useRef}from 'react'
import {useParams,useHistory} from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './UpdateProfile.css';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import Card from '../../shared/components/UIElement/Card';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import Update from '../components/Update';

function UpdateProfile()
{
        
   //const about=useRef(null);
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlace, setLoadedPlace] = useState();
    const profileId = useParams().profileId;
    
    
    useEffect(() => {
        const fetchPlace = async () => {
          try {
          
            const responseData = await sendRequest(
              process.env.REACT_APP_BACKEND_URL+`/profile/${profileId}`
            );
            setLoadedPlace(responseData.profile);
            
    
          } catch (err) {}
        };
        fetchPlace();
      }, [sendRequest,profileId]);
      
    //console.log(inputs);
    
    
    
    
    
    
    if (isLoading) {
        return (
          <div className="center">
            <LoadingSpinner />
          </div>
        );
      }
    
      if (!loadedPlace && !error) {
        return (
          <div className="center">
            <Card>
              <h2>Could not find place!</h2>
            </Card>
          </div>
        );
      }
    
        return(loadedPlace &&  <Update items={loadedPlace}/>);
            
}
export default UpdateProfile;