import express from 'express'

import { authentication } from '../../middleware/authentication.js';
import { addFund ,checkFund,checkTransaction} from './wallet.controller.js';

import { validateAddFund } from './walletValidation.js';

const route =express.Router();


route.post('/add-balance',authentication,validateAddFund,addFund);
route.get('/check-balance',authentication,checkFund)
route.get('/check-transaction',authentication,checkTransaction)

export default route;

