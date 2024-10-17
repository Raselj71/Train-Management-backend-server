import express from 'express'
import { createTrain,updateTrain ,getAllTrain, getSingleTrain} from './train.controller.js';
import { trainValidation } from './trainDataValidation.js';


const route=express.Router();

route.post('/create-train',trainValidation,createTrain)
route.put('/update-train/:id',trainValidation,updateTrain)
route.get('/getall-train',getAllTrain)
route.get('/get-single-train/:id',getSingleTrain)




export default route;