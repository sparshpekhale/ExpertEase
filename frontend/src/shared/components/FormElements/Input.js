import React,{useReducer} from 'react';
import './Input.css';
import {validate} from '../util/validators'
const inputReducer =(state ,action)=>
{
    switch(action.type)
    {
        case 'CHANGE':return{
            ...state,
            value :action.val,
            isValid:validate(action.val,action.validators)
        };
        case 'TOUCH':return{
            ...state,
            isTouched:true
        }
        default:
            return state;

    }
}


function Input(props)
{  const [inputState,dispatch]=useReducer(inputReducer,{value:'',isValid:false,isTouched:false});
    const changeHandler =event =>{
        dispatch({type:'CHANGE' , val: event.target.value, validators:props.validators});
    }
    const onTouchHandler=()=>{
            dispatch({type:'TOUCH' })
    }

    const element=props.element ==='input' ? <input id={props.id} 
                                                type={props.type} 
                                                placeholder={props.placeholder}
                                                onChange={changeHandler} 
                                                value={inputState.value} onBlur={onTouchHandler}/>
                                                :

                                            <textarea id={props.id}
                                            rows={props.rows || 3}
                                            onChange={changeHandler}
                                                value={inputState.value} 
                                                onBLur={onTouchHandler}/>
    return(
        <div className={`form-control ${!inputState.isValid &&  inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
    {!inputState.isValid && inputState.isTouched &&<p>{props.errorText}</p>}
        </div>
    );

}
export default Input;