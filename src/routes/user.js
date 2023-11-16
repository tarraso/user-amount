const Router = require("express").Router;
const userRoutes = Router();
const UserBalanceController = require('../controllers/user.ballance.controller');
const { validateAmount } = require('../middleware/validators/user.balance.validator');

userRoutes.post(
    '/updateBalance/:userId',
    validateAmount,
    UserBalanceController.update
);

module.exports = userRoutes