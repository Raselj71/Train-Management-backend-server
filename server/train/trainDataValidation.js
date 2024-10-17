import { check,validationResult } from "express-validator";
export const trainValidation = [
    check('trainNumber').notEmpty().withMessage('Train number is required'),
    check('trainName').notEmpty().withMessage('Train name is required'),
    check('stopages').isArray().withMessage('Stopages should be an array'),
    check('stopagess.*.station_id').notEmpty().withMessage('Station id is required'),
    check('stops.*.arrivalTime').isISO8601().withMessage('Arrival time should be a valid date'),
    check('stops.*.departureTime').isISO8601().withMessage('Departure time should be a valid date'),
    (req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ status: false, errors: errors.array() });
        }
        next();
    }
];