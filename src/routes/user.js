const Router = require("express").Router;
const Sequelize = require('sequelize');
const models = require("../models");
const userRoutes = Router();

userRoutes.post('/updateBalance/:userId', async (req, res) => {
    const userId = req.params.userId;
    const amount = parseInt(req.body.amount);
  
    if (isNaN(amount)) {
      return res.rstatus(400).json({ error: 'Invalid amount' });
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
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.send({success: false, message: "Insufficient balance"})
      } else {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
});
module.exports = userRoutes