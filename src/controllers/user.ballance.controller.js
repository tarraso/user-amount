const userBalanceService = require("../services").userBalanceService
const { validationResult } = require("express-validator");
const ApiError = require('../utils/api_error');

const UserBalanceController = {
    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const userId = req.params.userId;
        const amount = parseInt(req.body.amount);
        try{
            const result = await userBalanceService.reduceUserBalance(userId, amount);
            res.json(result);
        } catch (error){
            if(error instanceof ApiError){
                res.status(error.statusCode);
                res.json({success:false,message:error.message});
            }
            else{
                res.status(500);
                res.send("Internal server error");
            } 
        }
    }
};

module.exports = UserBalanceController
