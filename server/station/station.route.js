import express from 'express'
import { createStation, getAllStation ,updateStation} from './station.controller.js';
import { stationCreateDataValidation } from './stationDataValidation.js';


const route=express.Router();


route.post('/create',stationCreateDataValidation,createStation)
route.get('/getall',getAllStation)
route.put('/update/:id',stationCreateDataValidation,updateStation)


export default route;