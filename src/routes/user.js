const Router = require("express").Router;
const userRoutes = Router();
const UserBalanceController = require('../controllers/user.ballance.controller');

userRoutes.post('/updateBalance/:userId', UserBalanceController.update);

module.exports = userRoutes