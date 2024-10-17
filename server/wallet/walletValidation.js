import { body, check, validationResult } from 'express-validator';

export const validateAddFund = [
  check('amount')
    .notEmpty().withMessage('Amount is required')
    .isNumeric().withMessage('Amount must be a numeric value')
    .isFloat({ gt: 0 }).withMessage('Amount must be greater than 0'),
  check('transactionType').isIn(['debit']).withMessage('For adding fund transaction must be credit'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ status: false, errors: errors.array() });
        }
        next();
      }
];
