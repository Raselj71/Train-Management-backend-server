import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const stationSchema=new mongoose.Schema({
 
    stationName:{
        type:String,
        required:[true,"stationName is required"]
    },
    location:{
        type:String,
        required:[true, "station location is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

    
})

export const stationModel=mongoose.model('stationModel',stationSchema);