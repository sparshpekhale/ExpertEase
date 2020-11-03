
const HttpError = require('../models/http-error');
const {validationResult}=require('express-validator');
const {Users} =require('../models/advisor');


const getProfileById =async (req,res,next)=>{
    const profileId=req.params.pid;

    let profile;
    try{
     profile = await Users.findById(profileId);}
    catch(err){
        const error=new HttpError("Something went wrong could not find profile",500);
        return next(error); }


    if(!profile)
    {  
        const error=new HttpError("Something went wrong,your profile is not registered",500);
        return next(error);
    }
    res.json({profile: profile.toObject({getters:true})});
};


/*                                   UPDATE PROFILE                        */
const UpdateProfileById=async(req,res,next)=>{

const error=validationResult(req);
if(!error.isEmpty())
{
    return next(new HttpError("Invalid inputs passed please check your data",422));
}

  const {university,works,description}=req.body;
   
    const profileId=req.params.pid;
    let profile;

    try{
     profile = await Users.findById(profileId);
    }

    catch(err){
        const error=new HttpError("Something went wrong could not update places",500);
        return next(error);
    }
    //console.log(req.file.path)
    //console.log(req.file);
    
    profile.university=university;
    profile.works=works;
    profile.description=description;
    if(req.file)
    {
   profile.image=req.file.path;
    }
    try {
        await profile.save();
    } catch (error) {
        const erroe =new HttpError("Could not update place something went wrong",500)
        return next(error);
    }
    res.status(200).json({profile : profile.toObject({getters:true})});

};

exports.getProfileById=getProfileById;
exports.UpdateProfileById=UpdateProfileById;