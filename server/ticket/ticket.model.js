import mongoose from "mongoose";

const ticketSchema=new mongoose.Schema({
     user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, 'user_id is required'],
        ref:'userModel'
     },
     train_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, 'train id is required'],
        ref:'trainModel'
     },
     boardingStation: {
        type: String,
        required: true
    },
    destinationStation: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    }


})


export const ticketModel=mongoose.model('ticketModel',ticketSchema)