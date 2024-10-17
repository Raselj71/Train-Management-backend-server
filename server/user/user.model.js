import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
   name:{
    type:String,
    required:[true, "name is required"]
   },
   email:{
    type:String,
    required: [true, "email is required"],
    unique:true,
   },
   password:{
    type: String,
    required:[true, "password is required"]
   },

   createdAt:{
    type:Date,
    default:Date.now
   }




})

export const userModel=mongoose.model("userModel",userSchema);