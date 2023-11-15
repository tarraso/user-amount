const Sequelize = require('sequelize');
const models = require("../models");

let UserBalanceController = {
    update: async (req, res) => {
        const userId = req.params.userId;
        const amount = parseInt(req.body.amount);
        if (isNaN(amount)) {
            return res.status(400).json({ error: 'Invalid amount' });
        }
            try {
            let result = await models.User.update(
                { balance: Sequelize.literal(`balance - ${amount}`) },
                { where: { id: userId } }
                )
                if (result[0] === 1) {
                    console.log('Balance successfully updated.');
                } else {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.json({ success: true });
        } catch (error) {
            if (error.name === 'SequelizeDatabaseError') {
                res.send({success: false, message: "Insufficient balance"})
            } else {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }
};

module.exports = UserBalanceController
