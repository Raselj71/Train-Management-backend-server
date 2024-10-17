import { check ,validationResult} from "express-validator";


export const stationCreateDataValidation = [
    check("stationName").trim().notEmpty().withMessage('Station name is required'),
    check('location').trim().notEmpty().withMessage("location is required"),
  
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, errors: errors.array() });
      }
      next();
    }
  ];