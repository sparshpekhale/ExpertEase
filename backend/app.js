const mongoose = require('mongoose');
const express =require('express');
const bodyParser = require('body-parser');
const app=express();
const fs=require('fs');
const path=require('path');

const profileRoutes=require('./routes/profile-route');

const usersRoute = require('./routes/users-route');

app.use(bodyParser.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/api/profile',profileRoutes);
app.use('/api/users',usersRoute);
app.use((req,res,next)=>{
    const error=new HttpError("could not find error",404);
    throw error;
});
app.use((error,req,res,next)=>
{
  if(req.file){
    fs.unlink(req.file.path,(err)=>{console.log(err)});
  }
    if(res.headerSent)
    {
        return next(error);
    }
    res.status(error.code|| 500).json({message : error.message || "an unknown error"});

})

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rpea7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
        .then(()=>{process.env.PORT || app.listen(5000);})
        .catch(err => {console.log(err)});
