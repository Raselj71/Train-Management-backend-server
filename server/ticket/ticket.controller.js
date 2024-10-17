import mongoose from "mongoose";
import { trainModel } from "../train/train.model.js";
import { transactionModel, walletModel } from "../wallet/wallet.model.js";
import { ticketModel } from "./ticket.model.js";


export const buyTicket=async(req, res, next)=>{
    const session = await mongoose.startSession(); 
  
    session.startTransaction(); 
    try {
        const { train_id, boardingStation, destinationStation } = req.body;
        const { name, email, id } = req.user;

       
        const train = await trainModel.findById(train_id).populate('stopages.station_id').session(session);
        if (!train) {
            return res.status(404).json({status:false, error: 'Train not found' });
        }
        
        const fare=calculateFare(train.stopages,boardingStation,destinationStation)
        const wallet=await walletModel.findOne({user_id:id}).session(session)
        if(wallet.balance<fare){
            return res.status(400).json({status:false, error: 'Insufficient funds' });
        }
        wallet.balance-=fare
        await wallet.save({session})

        const ticket = new ticketModel({
            user_id: id,
            train_id: train_id,
            boardingStation,
            destinationStation,
            fare
        });


        await ticket.save({session})
        const transaction=new transactionModel({
               amount:fare,
               usere_id:id,
               transactionType:'credit'
        })

        await transaction.save({session})

        await session.commitTransaction();
        session.endSession(); 
        res.status(200).json({status:true,data:ticket})

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
        
    }
}

const calculateFare = (stopages, boardingStation, destinationStation) => {
   
    const boardingIndex = stopages.findIndex(stop => stop.station_id.stationName === boardingStation);
    const destinationIndex = stopages.findIndex(stop => stop.station_id.stationName === destinationStation);

    if (boardingIndex === -1 || destinationIndex === -1 || destinationIndex <= boardingIndex) {
        throw new Error('your choosen route is invalid');
    }

  
    const farePerStop = 100; 
    const numStops = destinationIndex - boardingIndex;
    return numStops * farePerStop;
};