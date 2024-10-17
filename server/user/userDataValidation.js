import { check, validationResult } from "express-validator";

export const userSignupDataValidation = [
  check("name").trim().notEmpty().withMessage('Name cannot be empty'),
  check('email').isEmail().withMessage('Enter a valid email'),
  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password cannot be empty')
    .bail() 
    .isLength({ min: 5 })
    .withMessage('Enter a strong password'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, errors: errors.array() });
    }
    next();
  }
];

export const userSigninDataValidation = [
   
    check('email').isEmail().withMessage('Enter a valid email'),
    check('password')
      .trim()
      .notEmpty()
      .withMessage('Password cannot be empty')
      .bail() 
      .isLength({ min: 5 })
      .withMessage('Enter a strong password'),
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ status: false, errors: errors.array() });
      }
      next();
    }
  ];
  