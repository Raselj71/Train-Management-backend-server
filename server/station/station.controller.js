
import { stationModel } from "./station.model.js"

export const createStation=async(req,res,next)=>{
      try {
          const{stationName, location}=req.body
          const new_station=new stationModel({
            stationName,
            location,
          })

          const save_station=await new_station.save();

          return res.status(201).json({status:true, message:"Station created"})
          

      } catch (error) {
        next(error)
        
      }
}

export const updateStation=async(req,res,next)=>{
    try {
        const{stationName, location}=req.body
        const id=req.params.id
        const station=await stationModel.findById(id)
         station.stationName=stationName;
         station.location=location;

        const update_station=await station.save();

        return res.status(201).json({status:true, message:"Station updated", data:update_station})
        

    } catch (error) {
      next(error)
      
    }
}

export const getAllStation=async(req, res,next)=>{
    try {
       
         const allStation=await stationModel.find({});
         return res.status(200).json({status:true, data:allStation})

    } catch (error) {
        next(error)
    }
}