import {createContext} from 'react';

export const AuthContext= createContext({
    message:'',
    isLoggedin:false,
    userId:null,
    name:'',
    login:()=>{},
    logout:()=>{}
});