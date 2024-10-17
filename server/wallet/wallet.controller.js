import { transactionModel, walletModel } from "./wallet.model.js";
import mongoose, { mongo } from "mongoose";


export const addFund = async (req, res, next) => {
  const session = await mongoose.startSession(); 
  
  session.startTransaction(); 

  try {
      const { name, email, id } = req.user;
      
      const { amount, transactionType } = req.body;

     
      let wallet = await walletModel.findOne({ user_id: id }).session(session);
      
      
      if (!wallet) {
          const new_wallet = new walletModel({
              user_id:id,
              
          });
          wallet = await new_wallet.save({ session });
      }


      const trans = new transactionModel({
          amount: amount,
          transactionType,
          usere_id:id, 
      });
      await trans.save({ session }); 

     
      wallet.balance = wallet.balance + amount;
      await wallet.save({ session }); 

      await session.commitTransaction();
      session.endSession(); 

      return res.status(200).send("Fund added successfully");
  } catch (error) {
      
      await session.abortTransaction();
      session.endSession();
      next(error);
  }
};
export const checkFund=async(req,res,next)=>{
  try {
    const { name, email, id } = req.user;
    const wallet=await walletModel.findOne({user_id:id});

    return res.status(200).json({status:true,balance:wallet.balance})
  } catch (error) {
     next(error)
    
  }
    
}

export const checkTransaction=async(req,res,next)=>{
try {
  const { name, email, id } = req.user;
   const allTransaction= await transactionModel.find({usere_id:id});
   return res.status(200).json({status:true, data:allTransaction})
  
} catch (error) {
  next(error)
}


}