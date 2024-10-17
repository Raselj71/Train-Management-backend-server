import express from 'express'
import { signUpController ,singInController,logoutController} from './user.controller.js';
import { userSigninDataValidation, userSignupDataValidation } from './userDataValidation.js';

const route =express.Router();


route.post('/signup',userSignupDataValidation,signUpController)
route.post('/signin',userSigninDataValidation, singInController)
route.get('/logout',logoutController)


export default route
