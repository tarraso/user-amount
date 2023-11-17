const Sequelize = require('sequelize');
const models = require("../models");
const ApiError = require('../utils/api_error');

const reduceUserBalance = async function(userId, amount){
    try {
        let result = await models.User.update(
            { balance: Sequelize.literal(`balance + ${amount}`) },
            { where: { id: userId } }
        )
        if (result[0] === 1) {
            console.log('Balance successfully updated.');
        } else {
            throw new ApiError(404, "User not found");
        }
        return({success:true});
    } catch (error) {
        if (error.name === 'SequelizeDatabaseError') {
            throw new ApiError(403, "Insufficient balance");
        } else {
            console.error(error);
            throw new ApiError(500, "Internal Server Error");
        }
    }
}

module.exports = {
    reduceUserBalance
}