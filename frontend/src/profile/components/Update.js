import React ,{useCallback,useState,useEffect,useContext,useRef}from 'react'
import {useParams,useHistory} from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './Update.css';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import Card from '../../shared/components/UIElement/Card';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

function Update(props)
{
    
    
    const data=props.items;
    
      const[works,setworks]=useState(data.works);
      const[description,setdesc]=useState(data.description);
      const[university,setuni]=useState(data.university);
      const[image,setimage]=useState(null);
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
    const profileId = useParams().profileId;
    const history = useHistory(); 
  
     
      const universityInputHandler =(event)=>{
          
        setuni(event.target.value);
        
    };
    const worksInputHandler =(event)=>{
       
        setworks(event.target.value);
        
        
    };
    const descriptionInputHandler =(event)=>{
       // inputs.description=event.target.value
        setdesc(event.target.value);
        
        
    };
    
    
    const placeUpdateSubmitHandler = async event => {event.preventDefault();
      
      
      
      try {
        const formData = new FormData();
        console.log(works+" "+description+" "+university);
      formData.append('works', `${works}`);
      formData.append('description', `${description}`);
      formData.append('university', `${university}`);
     formData.append("image",image);
        await sendRequest(
          
          process.env.REACT_APP_BACKEND_URL+`/profile/${profileId}`,
          'POST',
          formData
        );
      
        history.push('/' + auth.userId + '/profile');
      } catch (err) {console.log(err);}
    };
    const inputHandler=(pickedFile)=>{
      setimage(pickedFile);
    }
    
    
    
    if (isLoading) {
        
        return (
          <div className="center">
            <LoadingSpinner />
          </div>
        );
      }
        return(<React.Fragment>
           ;
            <ErrorModal error={error} onClear={clearError} />

       {!isLoading&& ( <form className="place-form" >
                  <ImageUpload id='image' onInput={inputHandler}/>
                    <label>University</label>
                    <input 
                     type="text" 
                    label="University" 
                    placeholder="University" 
                     value={university}
                     onChange={universityInputHandler}/>
                     <label>About</label>
                     <textarea 
                     rows={3}
                     placeholder="About"
                     type="text" 
                    label="About Us" 
                     value={description}
                     onChange={descriptionInputHandler}/>
                     <label>Works</label>
                    <textarea
                    rows={3}
                    value={works}
                   label="Works" 
                   placeholder="Works"
                     onChange={worksInputHandler}
                    />
                    <button type="submit" onClick={placeUpdateSubmitHandler} className="button">Save</button>
                    
                    
                   </form>)}
                   </React.Fragment>
                   
            
        );
}
export default Update;