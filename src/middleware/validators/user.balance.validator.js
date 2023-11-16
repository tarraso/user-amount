const { check } = require('express-validator');
const ApiError = require('../../utils/api_error');

// Custom validator function for a non-negative number
const nonNegativeNumberValidator = async value => {
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue) && floatValue >= 0) {
      return floatValue; // Validation passes
    } else {
      throw new Error("Amount must be a non-negative number");
    }
};
  
// Validator middleware for 'amount'
const validateAmount = check('amount')
.exists()
.custom(nonNegativeNumberValidator)
.withMessage('Amount must be a non-negative number');

module.exports = {
    validateAmount,
};