const mongoose=require('mongoose');
const uniqueValidator=require('mongoose-unique-validator');
const Schema =mongoose.Schema;



const Users =new Schema({
    name :{type : String,required:true},
    email:{type:String, required:true , unique:true},
    password :{type:String ,required :true},
    university :{type :String},
     description :{type :String},
     image :{type:String},
     works :{type : String},
     verify:{type : Boolean}
    
});
const student =new Schema({
    name :{type : String,required:true},
    email:{type:String, required:true , unique:true},
    password :{type:String ,required :true} 
});
Users.plugin(uniqueValidator);
student.plugin(uniqueValidator);
const userSchema = mongoose.model('users', Users);
const studentSchema = mongoose.model('student', student);

module.exports = { Users: userSchema, student: studentSchema }


