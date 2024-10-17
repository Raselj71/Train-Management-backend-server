import { check,validationResult } from "express-validator";

export const ticketValidation = [
    check('train_id').notEmpty().withMessage('Train id is required'),
    check('boardingStation').notEmpty().withMessage('Boarding station is required'),
    check('destinationStation').notEmpty().withMessage('Destination station is required'),
    (req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ status: false, errors: errors.array() });
        }
        next();
    }
];