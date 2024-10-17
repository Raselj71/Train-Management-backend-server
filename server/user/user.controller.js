import { userModel } from "./user.model.js"
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'
export const signUpController=async(req,res,next)=>{

     try {
        
        const{name, email,password}=req.body;

        
        const user=await userModel.find({email});
        

        if(user.length>0){
            return res.status(403).json({status:false,message:"User already exist"})
        }

       const hashPassword=await bcrypt.hash(password,10);

       const newUser=new userModel({
        name,
        email,
        password:hashPassword
       })

       

       const registerdUser=await newUser.save();
        
       return res.status(201).json({status:true,message:"user account created successfully"})
     

           
     } catch (error) {
        console.log(error)
        next(error)
        
     }


}

export const singInController=async(req, res,next)=>{
        try {
            const {email,password}=req.body
            
            const user=await userModel.findOne({email});

            if(!user){
                return res.status(403).json({status:false,message:"User not found"})
            }

            const isCorrect= await bcrypt.compare(password,user.password);

            if(!isCorrect){
                return res.status(403).json({status:false,message:"User passord is not matched"})
            }

            
            
            const token=jwt.sign({name:user.name,email:user.email,id:user._id},process.env.JWT_SECRET,{
                expiresIn:'1h'
            })

            res.cookie("token",token, {expiresIn:'1h'}).status(200).json({status:true, message:"user login",token:token})

    
        } catch (error) {
            next(error)
            
        }


}

export const logoutController =(req,res,next)=>{

    try {
        res.clearCookie('token'); 
        res.status(200).json({status:true, message:"User log out"})
    } catch (error) {
        next(error)
        
    }
}