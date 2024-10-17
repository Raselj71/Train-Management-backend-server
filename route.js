import express from 'express'
import userRoute from './server/user/user.route.js'
import statonRoute from './server/station/station.route.js'
import walletRoute from './server/wallet/wallet.route.js'
import trainRoute  from './server/train/train.route.js'
import ticketRoute from './server/ticket/ticket.route.js'

const route =express.Router();


route.use('/user',userRoute)
route.use('/station',statonRoute)
route.use('/wallet',walletRoute)
route.use('/train',trainRoute)
route.use('/ticket',ticketRoute)




export default route;