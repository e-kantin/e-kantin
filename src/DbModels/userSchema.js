const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:15
    },
   surName:{
    type:String,
    required:true,
    trim:true,
    minlength:3,
    maxlength:15,
   },
   //TC Kimlik Numarası
   TCK:{
    type:String,
       required:true,
       trim:true,
       length:11, //**? */
       unique:true,
   },
   Lectures:{
       type:Array, //*//

   },
   email:{
    type:String,
    required:true,
    minlength:3,
    maxlength:30,
    unique:true,
},
   password:{
    type:String,
    required:true,
    minlength:3,
    maxlength:100,
},

},{collection:'Users',timestamps:true});
const User=mongoose.model('User',userSchema);
module.exports=User;