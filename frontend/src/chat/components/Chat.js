import React,{useState,useEffect,useContext} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
let socket;

function Chat({location}){
    
    //let userId=auth.userId;
    const [name,setName]=useState('');
    const [sender,setSender]=useState('');
    const [id,setuserId]=useState('');
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);
    const ENDPOINT='localhost:4200';
    useEffect(()=>{
        const {sender,name,id}=queryString.parse(location.search);
        console.log(id);
        socket=io(ENDPOINT);
        setName(name);
        setSender(sender);
        setuserId(id);
        socket.emit('join',id,()=>{

        });
        return()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },[ENDPOINT,location.search]);
    useEffect(()=>{
        console.log(message);
        socket.on('message',(message)=>{
            setMessages([...messages,message])

        })

    },[messages])
    const sendMessage=(event)=>{
        event.preventDefault();
        console.log(id+"hi");
        if(message)
        {
            socket.emit('sendMessage',{message,sender,id},()=>{setMessage('')});
        }
    }
    console.log(messages,message);
    return(
        <div className="outerContainers">
            <div className="containers">
                <InfoBar room ={name}/>
                <Messages messages={messages} name={name}/>
                <Input message ={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );

}
export default Chat;