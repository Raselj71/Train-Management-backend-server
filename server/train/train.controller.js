import { trainModel } from "./train.model.js";
export const createTrain = async (req, res, next) => {
  try {
    const { trainNumber, trainName, stopages } = req.body;

    const train=new trainModel({trainNumber, trainName,stopages})
    await train.save();
    res.status(201).json({ status: true, data:train });
  } catch (error) {
    next(error);
  }
};

export const updateTrain=async(req,res,next)=>{
  try {
    const id=req.params.id;
    const { trainNumber, trainName, stopages } = req.body;
    const train=await trainModel.findByIdAndUpdate(id,{trainName,trainNumber,stopages},{new:true})

    
    if (!train) {
        return res.status(404).json({ error: 'Train not found' });
    }

    return res.status(200).json({status:true, data:train});
  } catch (error) {
    next(error)
  }


}

export const getAllTrain=async(req,res,next)=>{
    try {
        const getTrain = await trainModel.find({})
        .populate('stopages.station_id',) 
        .exec();
        
        return res.status(200).json({status:true, data:getTrain})
    } catch (error) {
        next(error)
    }
}

export const getSingleTrain=async(req,res,next)=>{
    try {
         const id=req.params.id
        const getTrain = await trainModel.findById(id)
        .populate('stopages.station_id', 'stationName location')
        .exec();
        
        return res.status(200).json({status:true, data:getTrain})
    } catch (error) {
        next(error)
    }
}


