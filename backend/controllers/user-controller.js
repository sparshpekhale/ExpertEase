 //const { v4: uuidv4 } = require('uuid');
 const {validationResult}=require('express-validator');
 const {Users} =require('../models/advisor');
 const {student}=require('../models/advisor');
const bcrypt=require('bcryptjs');
const HttpError = require('../models/http-error');


const getUsers=async (req,res,next)=>
{let users;
    try{  users=await Users.find({},'name university image verify')
}
catch(err){
    const error =new HttpError("fetching user fail,please try again",500);
    return next(error);
}
res.json({users:users.map(user=>user.toObject({getters:true}))
})

};


const signup=async(req,res,next)=>{

    const error=validationResult(req);
if(!error.isEmpty())
{
    return next( new HttpError("Invalid inputs passed please check your data",422));
}
    const{name,email,password,university} =req.body;
    let existingUser;
    try{
    existingUser=await Users.findOne({email:email});
    }
    catch(err){
        const error=new HttpError("Signup fail please try again later",100);
        return next(error);
    }
    if(existingUser)
    {const error=new HttpError("User exist already",100)
    return next(error);}
    
    let hashedPassword;
    try{
        hashedPassword=await bcrypt.hash(password,12);}
    catch(err){
        const error=new HttpError("could not create a user",500)
    return next(error);
    }

    const createdUser =new Users({
        name,
        email,
        password:hashedPassword,
        university,
        image:'uploads/images/download.jpg',
        verify:false
    });
    console.log(createdUser)
    try {
        await createdUser.save();
    } catch (err) {
        const error =new HttpError("Could not create a user please try again",500);
        return next(error);
    }
    res.status(201).json({user :createdUser.toObject({getters:true})})

};



const login=async(req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
    let msg='advisor';
    try{
    existingUser=await  Users.findOne({email:email});
    if(!existingUser)
    {msg='student'
        existingUser=await  student.findOne({email:email});
    }
    }
    catch(err){
        const error=new HttpError("Signup fail please try again later",100)
        return next(error);
    }
    
    if(!existingUser)
    {
        return next( new HttpError("could not identify user credential seem to be wrong",401));
    };
    let isValidPassword=false;
    try{isValidPassword=await bcrypt.compare(password,existingUser.password);}
    catch(err)
    { const error=new HttpError("Login failed please check your credential",500);
    return next(error);

    }
    if(!isValidPassword)
    {
        return next( new HttpError("could not identify user credential seem to be wrong",401));
    }
    res.json({
        message: msg,
        user: existingUser.toObject({ getters: true })
      });

    };
//                                                       signup for students
    const studentsignup=async(req,res,next)=>{
            console.log("student route used");
        const error=validationResult(req);
    if(!error.isEmpty())
    {
        return next( new HttpError("Invalid inputs passed please check your data",422));
    }
        const{name,email,password} =req.body;
        let existingUser;
        try{
        existingUser=await student.findOne({email:email});
        }
        catch(err){
            const error=new HttpError("Signup fail please try again later",100);
            return next(error);
        }
        if(existingUser)
        {const error=new HttpError("User exist already",100)
        return next(error);}

        let hashedPassword;
    try{
        hashedPassword=await bcrypt.hash(password,12);}
    catch(err){
        const error=new HttpError("could not create a user",500)
    return next(error);
    }
        const createdUser =new student({
            name,
            email,
            password:hashedPassword
        });

        try {
            await createdUser.save();
        } catch (err) {
            const error =new HttpError("Could not create a user please try again",500);
            return next(error);
        }
        res.status(201).json({user :createdUser.toObject({getters:true})})
    
    };
exports.getUsers=getUsers;
exports.login=login;
exports.signup=signup;
exports.studentsignup=studentsignup;