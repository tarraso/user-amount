const { check } = require('express-validator');
const ApiError = require('../../utils/api_error');

const isNumber = async value => {
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue)) {
      return floatValue; // Validation passes
    } else {
      throw new Error("Amount must be a number");
    }
};
  
// Validator middleware for 'amount'
const validateAmount = check('amount')
.exists()
.custom(isNumber)
.withMessage('Amount must be a number');

module.exports = {
    validateAmount,
};