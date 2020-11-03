import React,{useState,useRef,useContext} from 'react';
import './login.js'
import './login.css'
import ErrorModel from '../../shared/components/UIElement/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import { AuthContext } from '../../shared/context/auth-context.js';
import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import { useHttpClient } from '../../shared/hooks/http-hook.js';


function Login() {
    const auth=useContext(AuthContext)
    const name=useRef("what");
    const email=useRef("ksdahfkjh");
    const password=useRef("fasdfadf");
    //name.current.value='shrey';
    let inputs={name:'',university:'',email:'',password:''};
    const emailHandler=(event)=>{inputs.email=event.target.value }
    const passwordHandler=(event)=>{inputs.password=event.target.value};
    const nameHandler=(event)=>{inputs.name=event.target.value }
    const universityHandler=(event)=>{inputs.university=event.target.value }
    const[isValid,setisValid]=useState(false);
    
    const {isLoading,error,sendRequest,clearError}=useHttpClient();

    const onLoginHandler=async event =>{
      //console.log(process.env.REACT_APP_BACKEND_URL);
        event.preventDefault();
        
        try {
            const responseData = await sendRequest(
              process.env.REACT_APP_BACKEND_URL+'/users/login',
              'POST',
              JSON.stringify({
                email: inputs.email,
                password: inputs.password
              }),
              {
                'Content-Type': 'application/json'
              }
            );
            
            auth.login(responseData.user.id,responseData.user.name,responseData.message);
            
          } catch (err) {}
        }
 const onSignupHandler=async event =>{
    event.preventDefault();
    console.log(inputs);
    if(isValid)
    {
    try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          'POST',
          JSON.stringify({
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
            university:inputs.university
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        
          auth.login(responseData.user.id,responseData.user.name,'advisor');
      } catch (err) {}
    }
    else{
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup/students`,
          'POST',
          JSON.stringify({
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
          }),
          {
            'Content-Type': 'application/json'
          }
        );
        
          auth.login(responseData.user.id,responseData.user.name,'student');
      } catch (err) {}

    }
 }  
        
        
        const onadvisorHandler=()=> {
            
            setisValid(true);
            name.current.value='';
            email.current.value='';
            password.current.value='';
        };
        const onstudentHandler=()=> {
        
            setisValid(false);
            name.current.value='';
            email.current.value='';
            password.current.value='';};
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
        
            <div className='container' id='container' >
            
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <input ref ={name}type="text" placeholder="Name" onChange={nameHandler}/> 
                   { isValid && <input type="text" placeholder="University/field" onChange={universityHandler}/> }
                    <input ref ={email} type="email" placeholder="Email" onChange={emailHandler}/>
                    <input ref ={password} type="password" placeholder="Password" onChange={passwordHandler} />
                    <input type="radio" id="advisor" name="user type" value="advisor"  checked={isValid} onChange={onadvisorHandler} />
                    <label htmlFor="advisor">Advisor</label>
                    <input type="radio" id="student" name="user type" value="student" checked={!isValid}  onChange={onstudentHandler} />
                    <label htmlFor="student">Student</label>
                    <button onClick={onSignupHandler}>Register</button>
                </form>
            </div>

            <div class="form-container sign-in-container">
                <form >
                    <h1>Log in</h1>
                    <input type="email" placeholder="Email" onChange={emailHandler} />
                    <input type="password" placeholder="Password" onChange={passwordHandler}/>
                    <a href="#">Forgot your password?</a>
                    <button onClick={onLoginHandler}>Log in</button>
                </form>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>EXISTING USER?</h1>
                        <p> Login with your personal info </p>
                        <button class="btn" id="signIn" >Log in</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>NEW USER?</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="btn" id="signUp" >Sign Up</button>
                    </div>
                </div>
            </div>

        </div>

        </React.Fragment>
    )

}

export default Login