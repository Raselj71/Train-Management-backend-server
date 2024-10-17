import express from 'express'
import { authentication } from '../../middleware/authentication.js';
import { ticketValidation } from './ticketDataValidation.js';
import { buyTicket } from './ticket.controller.js';

const route= express.Router();



route.post('/buy-ticket',authentication,ticketValidation,buyTicket)







export default route;