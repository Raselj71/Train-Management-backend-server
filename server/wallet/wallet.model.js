import mongoose from "mongoose";



const walletSchema=new mongoose.Schema({
    balance:{
        type:Number,
        default:0,
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel',
        required:true,
        unique:true,
    },
    lastUpdate:{
        type:Date,
        default:Date.now,
    }
    
})

const transactionSchema=new mongoose.Schema({
    usere_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel',
        required:true,

    },
    amount:{
        type:Number,
        required:[true, "Amount number is required"],
        createdAt:{
            type:Date,
            default:Date.now,
        }
    },
    transactionType:{
        type:String ,
        enum:['credit','debit'],
        required:true,
    },
    transactionDate:{
        type:Date,
        default:Date.now,
    }

})

export const transactionModel=mongoose.model('transactionModel',transactionSchema);

export const walletModel=mongoose.model('walletModel',walletSchema);